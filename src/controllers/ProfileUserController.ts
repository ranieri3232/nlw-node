/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

class ProfileUserController {
  async handle(request: Request, response:Response) {
    const { user_id } = request;

    const service = new ProfileUserService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}
export { ProfileUserController };
