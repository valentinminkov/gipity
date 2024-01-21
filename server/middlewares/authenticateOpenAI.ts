import { Request, Response, NextFunction } from 'express';
import OpenAI from 'openai';

export const authenticateOpenAI = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
    req.openai = client;
    next();
  } catch (error) {
    console.error('Could not register client', error);
    res.status(500).send('Failed to authenticate with OpenAI');
  }
};
