//num3

// function increaseNumber(num) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(num + 10);
//       }, 3000);
//     });
//   }
  
//   increaseNumber(5).then((result) => {
//     console.log(result);
//   });

//num2
// function sumWithDelay(a, b) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(a + b);
//       }, 5000);
//     });
//   }
  
 
//   sumWithDelay(2, 3).then((result) => {
//     console.log(result); 
//   });

//num3

// function findMinFromArray(numbers) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const minNumber = Math.min(...numbers);
//         resolve(minNumber);
//       }, 2000);
//     });
//   }
  
//   const numbers = [3, 7, 1, 9, 4];
  
//   findMinFromArray(numbers)
//     .then(minNumber => {
//       console.log(minNumber); // выводим наименьшее число (1)
//     })
//     .catch(error => {
//       console.error(error);
//     });

//num4

// function delayedSum(a, b) {
//     setTimeout(() => {
//       console.log(a + b);
//     }, 2000);
//   }
  
//   delayedSum(2, 4);

//num5

// function printNumbersWithDelay(numbers) {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       console.log(numbers[index]);
//       index++;
//       if (index === numbers.length) {
//         clearInterval(intervalId);
//       }
//     }, 1000);
//   }
  
  
//   printNumbersWithDelay([1, 2, 3, 4, 5]); 
  