import { uuid } from "uuidv4";

export class User {
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;

    // This contructor will recive all properties but id (Omit<User, 'id'>)
    // After, id is declared manually be optional
    constructor(props: Omit<User, 'id'>, id?: string){
        // The constructor will assign all properties passed by props to class
        // self instance, and verify if id was passed, if is false, a new id
        // will be generated
        Object.assign(this, props);
        if (!id) {
            this.id = uuid()
        }
    }
}