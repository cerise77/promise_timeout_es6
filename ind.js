let promise = new Promise((resolve, reject) => {
  let i = 0;
  start();

  function start(){
    let interval = getRandomInt(1, 5);

    setTimeout(() => {
      i++;
      console.log(i, interval);

      if(interval == 3){
        resolve('result');
      } else if (i >= 10) {
        reject('error');
      } else {
        start();
      }
    }, interval*500);
  }

});

console.log('!!');

promise.then(
  (result) => {alert(result)},
  (error) => {alert(error)}
);

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
