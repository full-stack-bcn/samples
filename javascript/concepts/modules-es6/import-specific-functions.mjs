
// Import an internal NodeJS module
import { readFileSync, writeFileSync } from 'fs';

const config = JSON.parse(readFileSync('./data/config.json'));
config.newValue = 'value added from script';
writeFileSync('./data/new-config.json', JSON.stringify(config, null, 2));