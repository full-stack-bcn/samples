const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(([prop, val]) => val !== 0)
    .map(([prop, val]) => val + ' ' + (val !== 1 ? prop + 's' : prop))
    .join(', ');
};

console.log(formatDuration(1287038123));

/*
let obj = {a: 1, b: 2, c: 2};

console.log(Object.entries(obj));
*/