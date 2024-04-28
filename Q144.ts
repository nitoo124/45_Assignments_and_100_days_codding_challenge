/*
Question 144: Explain the use of the Promise.all() method with an example.
*/


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 3000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.error('Something went wrong:', error);
    });
  