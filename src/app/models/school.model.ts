import { Base } from "./base.model";


export class School extends Base {

    public idSchool: string;
    public name :string;
    public address :string;
    public locality :string;
    public province :string;
    public urlImage: string;
    public urlShield: string;


    constructor() {
        super();
        
    }
}
