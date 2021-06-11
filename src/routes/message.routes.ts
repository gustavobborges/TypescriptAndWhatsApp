import { Router } from 'express';
// import Message from '../models/Message';
// import { getCustomRepository } from 'typeorm';

const MessageRouter = Router();

MessageRouter.get('/', async (request, response) => {
    return response.json({ message: true });
  });
   
MessageRouter.post('/', async (req, res) => {
  //
});
  
export default MessageRouter;