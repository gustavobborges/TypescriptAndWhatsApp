import { Router } from 'express';
const accountsRouter = Router();
import AccountService from '../services/AccountService';

accountsRouter.get('/', async (req, res) => {
  try {
      const listAccounts = new AccountService();
      const accounts = await listAccounts.listAll();
      return res.json(accounts);
  } catch (err) {
    return res.status(400).send({ error: err.message });

  }
});

accountsRouter.post('/', async (req, res) => {
  try {
    const { name, token, whatsCode, client_id } = req.body;

    const createAccount = new AccountService();

    const account = await createAccount.create({
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

    const deleteAccount = new AccountService();
    deleteAccount.delete({
      id
    });

    return res.json("Conta deletada com sucesso!");
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

accountsRouter.put('/:id', async (req, res) => {  
  try {
    const { name, whatsCode, token } = req.body
    const { id } = req.params;

    const updateAccount = new AccountService();

    await updateAccount.update({
      id, name, whatsCode, token
    });
    return res.json("Accounte alterado com sucesso");

  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
})

export default accountsRouter;