// Since utils.mjs has no 'default' export, to import everything we can't write
// import utils from './utils.mjs'

// To import every exported function from 'utils.mjs', we use the asterisk and a
// name that we provide
import * as utils from './utils.mjs';

utils.fa();
utils.fb();