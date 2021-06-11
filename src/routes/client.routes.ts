import { Router } from 'express';
const clientsRouter = Router();
import ClientService from '../services/ClientService';

clientsRouter.get('/', async (req, res) => {
  try {
      const listClients = new ClientService();
      const clients = await listClients.listAll();
      return res.json(clients);
  } catch (err) {
    return res.status(400).send({ error: err.message });

  }
});

clientsRouter.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    const createClient = new ClientService();

    const client = await createClient.create({
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

    const deleteClient = new ClientService();
    deleteClient.delete({
      id
    });

    return res.json("Cliente deletado com sucesso!");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

clientsRouter.put('/:id', async (req, res) => {  
  try {
    const { name } = req.body
    const { id } = req.params;

    const updateClient = new ClientService();

    await updateClient.update({
      id, name
    });
    return res.json("Cliente alterado com sucesso!");

  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
})

export default clientsRouter;