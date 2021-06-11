import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

import Client from './Client';
import Group from './Group';

@Entity('accounts')
class Account {
   
    @PrimaryGeneratedColumn('uuid')
    id: String;
    
    @Column()
    client_id: String;

    @ManyToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client: Client | null;

    @ManyToMany(() => Group)
    @JoinTable()
    groups: Group[]

    @Column()
    name: String;

    @Column()
    token: String;

    @Column()
    whatsCode: String;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}

export default Account;