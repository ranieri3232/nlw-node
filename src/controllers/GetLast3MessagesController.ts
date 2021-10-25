/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response } from 'express';
import { GetLast3MessagesService } from '../services/GetLast3MessagesService';

class GetLast3MessagesController {
  async handle(request: Request, response:Response) {
    const service = new GetLast3MessagesService();
    const result = await service.execute();
    return response.json(result);
  }
}
export { GetLast3MessagesController };
