define(function() {

  // swap elements in an array.
  function swap(array, i, j) {
    if (0 <= i && i < array.length && 0 <= j && j < array.length) {
      var tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }

  return {
    swap: swap
  };
});