import Person from './Person';

export function displayInPage(text) {
    return document.body.innerHTML += `${text}<br>` ;
}

export const defaultName = Person.lieblingsName;
