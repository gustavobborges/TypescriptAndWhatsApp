import { Router } from 'express';
// import Group from '../models/Group';
// import { getCustomRepository } from 'typeorm';

const GroupRouter = Router();

GroupRouter.get('/', async (request, response) => {
    return response.json({ group: true });
  });
   
GroupRouter.post('/', async (req, res) => {
  //
});
  
export default GroupRouter;