import Person from '../module/Person';
import {displayInPage} from "./util";

class SlowPerson extends Person {

    sayMyName() {
        // broken, as this is bound to window
        setTimeout(function () {
            displayInPage(this.name);
        }, 1000);

        setTimeout(() => displayInPage(self.name), 1000);
        var self = this;
        setTimeout(function () {
            displayInPage(self.name);
        }, 1000);
        setTimeout(function () {
            displayInPage(this.name);
        }.bind(this), 1000);
    }
}

const olli = new SlowPerson('Olli');
olli.sayMyName();
