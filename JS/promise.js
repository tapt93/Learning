const STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2
}

function CustomPromise(executor) {
  let state = STATE.PENDING,
    value = null,
    handlers = [],
    catches = [];

  function resolve(result) {
    if (state !== STATE.PENDING) return;

    state = STATE.FULFILLED;
    value = result;

    handlers.forEach(h => h(value));
  }

  function reject(err) {
    if (state !== STATE.PENDING) return;

    state = STATE.REJECTED;
    value = err;

    catches.forEach(c => c(err));
  }

  this.then = function (callback) {
    if (state === STATE.FULFILLED) {
      callback(value);
    }
    else {
      handlers.push(callback);
    }
  }

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  setTimeout(() => {
    res('Hello world');
  }, 1000);
}

let someText = new CustomPromise(doWork);

let otherText = someText.then(val => {
  console.log('first log');;
});


