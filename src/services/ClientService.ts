import { getRepository, getConnection } from 'typeorm';
import Client from '../models/Client';

interface RequestCreate {
	name: String;
}

interface RequestDelete {
	id: String;
}

interface RequestUpdate {
	id: String;
	name: String;
}

class ClientService {

	public async listAll() {
		const clientsRepository = getRepository(Client);
		const clients = await clientsRepository.find();
		return clients;
	}

	public async create({ name }: RequestCreate): Promise<Client> {
		const clientsRepository = getRepository(Client);
		const checkClientExists = await clientsRepository.findOne({
			where: { name },
		});
		if (checkClientExists) {
			throw new Error('Name already used.');
		}
		const client = clientsRepository.create({
			name
		});

		await clientsRepository.save(client);
		return client;
	}

	public async delete({ id }: RequestDelete): Promise<Client> {
		await getConnection()
			.createQueryBuilder()
			.delete()
			.from(Client)
			.where({ id: id })
			.execute();
		return;
	}

	public async update({ id, name }: RequestUpdate): Promise<Client> {

		const clientsRepository = getRepository(Client);
		const checkClientExists = await clientsRepository.findOne({
			where: { name },
		});
		if (checkClientExists) {
			throw new Error('Name already used.');
		} else {

			const updateClient = { id: id, name: name };
			Object.keys(updateClient).forEach(key => updateClient[key] === undefined ? delete updateClient[key] : {});

			await getConnection()
				.createQueryBuilder()
				.update(Client)
				.set(updateClient)
				.where({ id: id })
				.execute();
			return;
		}

	}
}

export default ClientService;