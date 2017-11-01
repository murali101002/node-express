var EventEmitter = require('events').EventEmitter;

var getResponse = c=>{
  var e = new EventEmitter();
  process.nextTick(()=>{
    e.emit('start');
    count = 0;
    var t =  setInterval(()=>{
      e.emit('data',count++);
      if(count === c){
        e.emit('end');
        clearInterval(t)
      }
    }, 10);
  });
  return e;
}
var eve = getResponse(5);
eve.on('start',()=>console.log('Event started'));
eve.on('data',data=>{
  console.log('data',data);
});
eve.on('end',()=>console.log('Event end'));
eve.on('error',()=>console.log('error'));