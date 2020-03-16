// The "named exports" and the "default export" are separate channels
import main, { fa, fb } from './utils.mjs';

fa();
fb();
main();