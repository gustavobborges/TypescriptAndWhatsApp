import { Router, Request, Response } from 'express';
const accountsRouter = Router();
import AccountService from '../services/AccountService';
const accountService = new AccountService();

accountsRouter.get('/', async (req, res) => {
  try {
      const accounts = await accountService.listAll();
      return res.json(accounts);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

accountsRouter.post('/', async (req, res) => {
  try {
    const { name, token, whatsCode, client_id } = req.body;
    const account = await accountService.create({
      name,
      token,
      whatsCode,
      client_id
    });

    return res.json(account);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

accountsRouter.delete('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    accountService.delete({
      id
    });

    return res.json("Conta deletada com sucesso!");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

accountsRouter.put('/:id', async (req: Request, res: Response) => {  
  try {
    const { name, whatsCode, token } = req.body;
    const { id } = req.params;

    await accountService.update({
      id, name, whatsCode, token
    });

    return res.json("Conta alterada com sucesso!");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
})

export default accountsRouter;