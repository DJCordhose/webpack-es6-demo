import Male from './Male';
import * as util from "./util";

console.log(util);

const olli = new Male(util.defaultName);
util.displayInPage(olli.name);
