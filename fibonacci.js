module.exports = (function () {
  const fibs = function(n) {
    // Edge cases: very short sequences
    if (n <= 0) {
      return [];
    }
    if (n == 1) {
      return [0];
    }

    // General case: build from a basis array
    let arr = [0, 1];
    for (let i = arr.length; i < n; i++) {
      let nextElement = arr[i - 2] + arr[i - 1];
      arr.push(nextElement);
    }
    return arr;
  };

  const fibsRec = function(n) {
    // Basis case: minimal sized sequence
    if (n == 1) {
      return [0];
    }
    if (n == 2) {
      return [0, 1];
    }

    let prevN = n - 1;
    let arr = fibsRec(prevN);
    let nextElement = arr[prevN - 1] + arr[prevN - 2];
    arr.push(nextElement);
    return arr;
  };

  return { fibs, fibsRec };
}());