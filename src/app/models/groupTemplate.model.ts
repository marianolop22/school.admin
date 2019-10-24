import { Base } from "./base.model";

export class GroupTemplate extends Base {

    public idSchool: string;
    public idGroup :string;
    public description :string;

    constructor() {
        super();
    }
}
