// use 'strict';

var handleResults = (error, results, waitTime)=>{
  if(error){
    console.log("Input number is odd "+error.message);
  }else{
    console.log("Doubled the even number "+results+" in "+waitTime);
  }
}

function evenDoubler(i, callback){
  var time = Math.floor(Math.random())
  if(i%2){
    callback(new Error('Odd number'));
  }else{
    callback(null, i*2, time);
  }
}

for(var i=1;i<=10;i++){
  evenDoubler(i, handleResults);
}