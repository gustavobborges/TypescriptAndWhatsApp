import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

import Account from './Account';
import Group from './Group';

@Entity('messages')
class Message {
   
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    client_id: string;

    @ManyToOne(() => Account)
    @JoinColumn({ name: 'account_id' })
    account: Account | null;

    @ManyToOne(() => Group)
    @JoinColumn({ name: 'group_id' })
    group: Group | null;

    @Column()
    text: String;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}

export default Message;