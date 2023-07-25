import { Company } from './classes/Company';
import { Map } from './classes/Map';
import { User } from './classes/User';

const user = new User();
const company = new Company();
const map = new Map('map');

map.addMarker(user);
map.addMarker(company);
