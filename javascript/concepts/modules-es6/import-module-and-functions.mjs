
import crypto, { randomBytes } from 'crypto';

const randomString = randomBytes(15).toString('hex');
console.log(randomString);

const hash = crypto.createHash('sha1');
hash.update(randomString);
console.log(hash.digest('hex'));