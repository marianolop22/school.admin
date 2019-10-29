import { Base } from "./base.model";

export class Group extends Base {

    public idSchool: string;
    public idGroup :string;
    public year :string;

    constructor() {
        super();
    }
}
