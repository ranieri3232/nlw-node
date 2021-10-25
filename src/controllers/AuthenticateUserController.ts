/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response:Response) {
    const { code } = request.body;
    const service = new AuthenticateUserService();
    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}
export { AuthenticateUserController };
