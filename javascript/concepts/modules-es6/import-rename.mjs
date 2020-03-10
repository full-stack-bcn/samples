
import { readFileSync as read } from 'fs';

const config = read('./data/config.json').toString();
console.log(config);
