
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let array = [];
    let count = 0;
      for (let index = 0; index < matrix.length; index++) {
        count++;
        if(count % 2 === 0) {
          matrix[index].reverse();
        }
          for (let j = 0; j < matrix[index].length; j++) {
            array.push(matrix[index][j])
          }
        }
    return array
}
