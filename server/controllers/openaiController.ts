import { Request, Response } from 'express';

export const listModels = async (req: Request, res: Response) => {
  try {
    const models = await req.openai?.models.list();
    res.json(models);
  } catch (error) {
    res.status(500).send(error);
  }
};

// export const createCompletion = async (req: Request, res: Response) => {
//   try {
//     const { prompt } = req.body;
//     const completion = await req.openai?.completions.create({ prompt });
//     res.json(completion);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
