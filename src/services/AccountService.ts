import { getRepository, getConnection } from 'typeorm';
import Account from '../models/Account';

interface RequestCreate {
	client_id: String;
	name: String;
	token: String;
	whatsCode: String;
}

interface RequestDelete {
	id: String;
}

interface RequestUpdate {
	id: String;
	name: String;
	whatsCode: String;
	token: String;
}

class AccountService {

	public async listAll() {
		const accountsRepository = getRepository(Account);
		const accounts = await accountsRepository.find();
		return accounts;
	}

	public async create({ name, token, whatsCode, client_id }: RequestCreate): Promise<Account> {
		const accountsRepository = getRepository(Account);
		const account = accountsRepository.create({
			name,
			token,
			whatsCode,
			client_id
		});

		await accountsRepository.save(account);
		return account;
	}

	public async delete({ id }: RequestDelete): Promise<Account> {
		await getConnection()
			.createQueryBuilder()
			.delete()
			.from(Account)
			.where({ id: id })
			.execute();
		return;
	}

	public async update({ id, name, whatsCode, token }: RequestUpdate): Promise<Account> {

		const accountsRepository = getRepository(Account);
		const checkAccountExists = await accountsRepository.findOne({
			where: { name },		
		});
		if (checkAccountExists) {
			throw new Error('Name already used.');
		} else {

			const updateAccount = {id: id, name: name, whatsCode: whatsCode, token: token};
			Object.keys(updateAccount).forEach(key => updateAccount[key] === undefined ? delete updateAccount[key] : {});

			await getConnection()
				.createQueryBuilder()
				.update(Account)
				.set(updateAccount)
				.where({ id: id })
				.execute();
			return;
		}
	}
}

export default AccountService;