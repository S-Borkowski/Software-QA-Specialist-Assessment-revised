export class User {
    readonly username: string;
    readonly password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export class Users {
    static readonly INVALID_USER = new User('invalid', 'password');
    static readonly VALID_USER = new User(process.env.USERNAME, process.env.PASSWORD);
}
