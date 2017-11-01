
setTimeout(()=>console.log('Timeout 1'), 5);
setTimeout(()=>console.log('Timeout 2'), 4);
setImmediate(()=>console.log('Set Immediate'));
setTimeout(()=>console.log('Timeout 3'), 0);
process.nextTick(()=>console.log('Process Next tick'));
