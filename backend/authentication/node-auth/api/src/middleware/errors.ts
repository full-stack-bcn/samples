import { RequestHandler, Response, Request, NextFunction } from 'express';

export const catchAsync = (handler: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  handler(req, res, next).catch(next);
};

export const notFound = (req: Request, res: Response, next: NextFunction) =>
  res.status(404).json({ message: 'Not Found' });

export const internalServerError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!err.status) {
    console.log(err.stack);
  }
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal server error' });
};
