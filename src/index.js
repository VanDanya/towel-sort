
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) {
      let i = 0;
      let z = matrix.length;
      let arr1 = [];
      while (i < z) {
          if (i % 2 === 0) {
              arr1 = arr1.concat(matrix[i]);
          } else {
          matrix[i].sort(function (a, b) {return b-a});
          arr1 = arr1.concat(matrix[i]);
          }
          i++;
      }
      console.log(arr1);
      return arr1;
  } return [];
}