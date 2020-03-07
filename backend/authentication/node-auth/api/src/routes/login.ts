import { Router } from 'express';
import { validate, loginSchema } from '../validation';
import { catchAsync, ensureLoggedOut, ensureLoggedIn } from '../middleware';
import { User } from '../models';
import { Unauthorized } from '../errors';
import { logIn, logOut } from '../auth';

const router = Router();

router.post(
  '/login',
  ensureLoggedOut,
  catchAsync(async (req, res) => {
    await validate(loginSchema, req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // FIXME: Timing attack
    if (!user || !(await user.matchesPassword(password))) {
      throw new Unauthorized('Incorrect email or password');
    }
    logIn(req, user.id);
    console.log("userId", user.id);
    res.json({ message: 'OK' });
  }),
);

router.post(
  '/logout',
  ensureLoggedIn,
  catchAsync(async (req, res) => {
    await logOut(req, res);
    res.json({ message: 'OK' });
  }),
);

export default router;
