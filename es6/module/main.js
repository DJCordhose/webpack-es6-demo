import Person from './Person';
import Male from './Male';
import {displayInPage} from "./util";

const olli = new Male(Person.lieblingsName);
displayInPage('yo');
displayInPage(olli.name);
