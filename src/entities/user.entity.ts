import {v4 as uuid} from 'uuid';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, BeforeInsert, BeforeUpdate, JoinColumn, OneToOne} from "typeorm"

/* TODO: implement class-validator */
@Entity('user')
export class User {
    @PrimaryColumn()
    public readonly id?: string;
    @Column()
    public name: string;
    @Column()
    public email: string;
    @Column({select: false})
    public password: string;
    @CreateDateColumn({name: 'created_at'})
    public createdAt?: Date;
    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt?: Date;
    
    constructor(props: Omit<User, 'id'>, id?: string){
        // The constructor will assign all properties passed by props to class
        // self instance, and verify if id was passed, if is false, a new id
        // will be generated
        Object.assign(this, props);
        if (!id) {
            this.id = uuid()
            this.createdAt = new Date()
            this.updatedAt = new Date()
        } else {
            this.updatedAt = new Date ()
        }
    }
}