import { Router } from 'express';
const clientsRouter = Router();
import ClientService from '../services/ClientService';
const clientsService = new ClientService();


clientsRouter.get('/', async (req, res) => {
  try {
      const clients = await clientsService.listAll();
      return res.json(clients);
  } catch (err) {
    return res.status(400).send({ error: err.message });

  }
});

clientsRouter.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const client = await clientsService.create({
      name
    });

    return res.json(client);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

clientsRouter.delete('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    clientsService.delete({
      id
    });

    return res.json("Cliente deletado com sucesso!");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

clientsRouter.put('/:id', async (req, res) => {  
  try {
    const { name } = req.body;
    const { id } = req.params;

    await clientsService.update({
      id, name
    });
    return res.json("Cliente alterado com sucesso!");

  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
})

export default clientsRouter;