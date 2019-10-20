import { runInThisContext } from 'vm';

export class School {

    public idSchool: string;
    public name :string;
    public address :string;
    public locality :string;
    public province :string;
    public creationDate :Date;
    public modifiedDate: Date;
    public endDate :Date
    public idUser: string;
    public urlImage: string;
    public urlShield: string;


    constructor() {
        this.endDate = null;
        
    }
}
