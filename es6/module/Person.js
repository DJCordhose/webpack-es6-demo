class Person {
    static get lieblingsName() {
        return 'Olli';
    }

    constructor(name, gender) {
        this._name = name;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }
}

export default Person;