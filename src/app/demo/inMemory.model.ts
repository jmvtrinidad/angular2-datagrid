export class User {
    active: boolean;

    constructor(public userId: number,
                public name: string,
                public username: string) {
        this.active = true;
    }
}