import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';

import Account from './Account';

@Entity('groupsWhats')
class Group {
   
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    whatsCode: String;

    @ManyToMany(() => Account, { cascade: true, onDelete: 'CASCADE' })
    @JoinTable({
        name: 'accountHasGroup',
        joinColumn: {
            name: "groupsWhats_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "account_id",
            referencedColumnName: "id"
        }
    })
    accounts: Account[];

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}

export default Group;