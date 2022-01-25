// function test(x) {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   setTimeout(() => {
//     console.log(x);
//   }, 0);
//   console.log(4);
// }

// setTimeout(() => {
//   console.log('x');
// }, 0);
// test('u');
// console.log('a');
// console.log('b');
// test('z');
// setTimeout(() => {
//   console.log('y');
// }, 0);


// setTimeout(() => {
//   console.log('settimeout');
// }, 100);

// queueMicrotask(() => {
//   console.log('quêu micro task');
// })
// Promise.resolve().then(()=>{
//   setTimeout(() => {
//     console.log('promise');
//   }, 0);
// })


const button = document.querySelector("button");
button.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log('micro task 1');
  })
  console.log('sync task 1');
})
button.addEventListener('click', () => {
  Promise.resolve().then(() => {
    console.log('micro task 2');
  })
  console.log('sync task 2');
})
// button.click();