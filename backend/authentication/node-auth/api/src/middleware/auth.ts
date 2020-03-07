import { Request, Response, NextFunction } from 'express';
import { isLoggedIn } from '../auth';
import { Unauthorized, BadRequest } from '../errors';

export const ensureLoggedOut = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (isLoggedIn(req)) {
    throw new BadRequest('You are already logged in');
  }
  next();
};

export const ensureLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!isLoggedIn(req)) {
    throw new Unauthorized('You must be logged in');
  }
  next();
};
