module.exports = (function () {
  const _MAX_MEMO_INDEX = 255;
  let _memo = new Array(_MAX_MEMO_INDEX);

  _getMemo = function (index) {
    return _memo[index] ?? null;
  }

  _setMemo = function (index, value) {
    if (index <= _MAX_MEMO_INDEX) {
      _memo[index] = value;
      return true;
    } else {
      return false;
    }
  }

  const fibonacci = function (n) {
    // Basis case
    if (n <= 1) {
      return n;
    }

    // Check memo
    let memoValue = _getMemo(n);
    if (memoValue !== null) {
      return memoValue;
    }

    // Calculate
    const result = fibonacci(n - 1) + fibonacci(n - 2);

    // Add to memo
    _setMemo(n, result);
    return result;
  }

  return fibonacci;
}());