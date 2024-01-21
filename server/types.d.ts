import { OpenAI } from 'openai'; // Assuming OpenAI is exported as named export

declare module 'express-serve-static-core' {
  interface Request {
    openai?: OpenAI;
  }
}
