import { Router } from 'express';
import { catchAsync, ensureLoggedIn } from '../middleware';
import { User } from '../models';

const router = Router();

router.get(
  '/home',
  ensureLoggedIn,
  catchAsync(async (req, res) => {
    console.log("/home", req.session!.userId);
    const user = await User.findById(req.session!.userId);
    console.log(user);
    res.json(user);
  }),
);

export default router;
