import { Router } from 'express';
import { User } from '../models';
import { logIn } from '../auth';
import { validate, registerSchema } from '../validation';
import { ensureLoggedOut, catchAsync } from '../middleware';
import { BadRequest } from '../errors';

const router = Router();

router.post('/register', ensureLoggedOut, catchAsync(async (req, res) => {
  await validate(registerSchema, req.body);

  const { email, name, password } = req.body;

  const found = await User.exists({ email });
  if (found) {
    throw new BadRequest('Invalid email');
  }

  const user = await User.create({ email, name, password });

  logIn(req, user.id);

  res.json({ message: 'OK' });
}));

export default router;
