/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import 'dotenv';
import { Router, Request, Response } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);

router.get('/messages/last3', new GetLast3MessagesController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

router.get('/api', (req: Request, res: Response) => {
  console.log(process.env.PORT);
  console.log(process.env.JWT_SECRET);
  return res.json({ status: 200, content: "Hello, i'm a API " });
});

export { router };
