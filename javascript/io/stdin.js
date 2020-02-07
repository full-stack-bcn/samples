
process.stdin.on('data', (data) => {
   console.log("data:", String(data.slice(0, -1)));
})