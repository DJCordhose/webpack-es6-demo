import Person from './Person';

class Male extends Person {
    constructor(name) {
        super(name, 'Male');
    }

    get name() {
        return "Mr " + super.name;
    }
}

export default Male;