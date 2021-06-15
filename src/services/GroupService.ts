import { getRepository, getConnection } from 'typeorm';
import Group from '../models/Group';
import Account from '../models/Account';


interface RequestCreate {
	name: String;
	whatsCode: String;
	account_id: String;
}

interface RequestDelete {
	id: String;
}

interface RequestUpdate {
	id: String;
	name: String;
}

class GroupService {

	public async listAll() {
		const groupsRepository = getRepository(Group);
		const groups = await groupsRepository.find();
		return groups;
	}

	public async create({ name, whatsCode, account_id }: RequestCreate): Promise<Group> {
		const groupsRepository = await getRepository(Group);
		const account = await getRepository(Account).findOne({ id: account_id });
		
		const group = new Group();
		group.name = name;
		group.whatsCode = whatsCode;
		group.accounts = [account];

		await groupsRepository.save(group);
		return group;
	}

	public async delete({ id }){
		const manager = getConnection().manager;
		await manager.query(`DELETE FROM accountHasGroup WHERE groupsWhats_id = '${id}';`);

		await getConnection()
			.createQueryBuilder()
			.delete()
			.from(Group)
			.where({ id: id })
			.execute();	
		return;
	}

	// public async update({ id, name }: RequestUpdate): Promise<Group> {

	// 	const groupsRepository = getRepository(Group);
	// 	const checkGroupExists = await groupsRepository.findOne({
	// 		where: { name },		
	// 	});
	// 	if (checkGroupExists) {
	// 		throw new Error('Name already used.');
	// 	} else {

	// 		const updateGroup = {id: id, name: name};
	// 		Object.keys(updateGroup).forEach(key => updateGroup[key] === undefined ? delete updateGroup[key] : {});

	// 		await getConnection()
	// 			.createQueryBuilder()
	// 			.update(Group)
	// 			.set(updateGroup)
	// 			.where({ id: id })
	// 			.execute();
	// 		return;
	// 	}
	// }
}

export default GroupService;