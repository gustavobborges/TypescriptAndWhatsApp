import { Router, Request, Response } from 'express';
const groupsRouter = Router();
import GroupService from '../services/GroupService';
const groupService = new GroupService();

groupsRouter.get('/', async (req, res) => {
  try {
      const groups = await groupService.listAll();
      return res.json(groups);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

groupsRouter.post('/', async (req, res) => {
  try {
    const { name, whatsCode, account_id } = req.body;
    const group = await groupService.create({
      name,
      whatsCode,
      account_id
    });

    return res.json(group);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

groupsRouter.delete('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    groupService.delete({
      id
    });

    return res.json("Grupo deletado com sucesso!");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

// groupsRouter.put('/:id', async (req: Request, res: Response) => {  
//   try {
//     const { name, whatsCode, token } = req.body;
//     const { id } = req.params;

//     await groupService.update({
//       id, name, whatsCode, token
//     });

//     return res.json("Conta alterada com sucesso!");
//   } catch (err) {
//     return res.status(400).send({ error: err.message });
//   }
// })

export default groupsRouter;