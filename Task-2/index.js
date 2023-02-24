"use strict";
function replaceOnesWithZeros(obj) {
  if (typeof obj === "object") {
    for (let key in obj) {
      obj[key] = replaceOnesWithZeros(obj[key]);
    }
    return obj;
  } else {
    return obj === 0 ? 1 : 0;
  }
}

//Example

const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

replaceOnesWithZeros(d);
console.log(d);
// Output:

// {
//   left: {
//     left: {
//       left: 0,
//       right: {
//         left: 1,
//         right: 0,
//       },
//     },
//     right: {
//       left: 1,
//       right: 0,
//     },
//   },
//   right: 0,
// }
