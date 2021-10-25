/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response:Response) {
    const { message } = request.body;
    const { user_id } = request;
    const service = new CreateMessageService();

    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}
export { CreateMessageController };
