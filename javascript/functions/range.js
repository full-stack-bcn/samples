
function range(from, to, step = 1) {
	let A = [];
	for (let i = from; i < to; i += step) {
		A.push(i);
	}
	return A;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));