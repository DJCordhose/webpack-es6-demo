import Person from './Person';

export function displayInPage(text) {
    document.body.innerHTML += `${text}<br>` ;
}

export const defaultName = Person.lieblingsName;
