function veclen(x, y) {
	return Math.sqrt(x*x + y*y);
}

function repeat(str, n) {
	let result = '';
	for (let i = 0; i < n; i++) {
		result += str;
	}
	return result;
}

console.log(veclen(1, 1));
console.log(repeat("*", 10));