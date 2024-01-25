import { Request, Response, NextFunction } from 'express';

interface CacheContent {
  data: any;
  expiry: number;
}

export const cache: Record<string, CacheContent> = {};

export function cacheMiddleware(durationInMinutes: number) {
  return (req: Request, res: Response, next: NextFunction) => {
    const key: string = '__express__' + req.originalUrl || req.url;
    const cacheEntry: CacheContent | undefined = cache[key];

    if (cacheEntry && cacheEntry.expiry > Date.now()) {
      res.send(cacheEntry.data);
      return;
    } else {
      const originalSend = res.send.bind(res);
      res.send = (body): any => {
        // Convert duration from minutes to milliseconds
        cache[key] = {
          data: body,
          expiry: Date.now() + durationInMinutes * 60 * 1000,
        };
        originalSend(body);
      };
      next();
    }
  };
}
