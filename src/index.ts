import {format} from "date-fns";
import * as frLocale from "date-fns/locale/fr";

console.log(format(new Date(), 'MMM YYYY', {locale: frLocale}));