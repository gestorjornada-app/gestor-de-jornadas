export class UserModel {

    private _name: string;
    private _phoneNumber: Number;
    private _address: string;
    private _institution: string;
    private _email: string;
    private _password: string;

    constructor(name: string, phoneNumber: Number, address: string, institution: string, email: string, password: string) {
        this._name = name;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._institution = institution;
        this._email = email;
        this._password = password;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get phoneNumber(): Number {
        return this._phoneNumber;
    }

    set phoneNumber(value: Number) {
        this._phoneNumber = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get institution(): string {
        return this._institution;
    }

    set institution(value: string) {
        this._institution = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}
