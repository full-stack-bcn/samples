// We cannot import individual functions because there are no named exports:
// import { fa, fb } from './utils.mjs';

// Since all functions from utils.mjs are exported inside the 'default' object,
// we import them like this
import utils from './utils.mjs';

utils.fa();
utils.fb();
