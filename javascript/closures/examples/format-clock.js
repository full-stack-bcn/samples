// A function that formats a "clock"
function formatClock(hours, minutes, seconds) {
  // 'pad' is a nested function
  const pad = num => (num < 10 ? "0" : "") + num
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds)
}

console.log(formatClock(8, 2, 9));