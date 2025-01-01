module.exports = (function () {
  const _MAX_MEMO_KEY = 255;
  let _memo = {};

  _getMemo = function (key) {
    return _memo[key] ?? null;
  }

  _setMemo = function (key, value) {
    if (key <= _MAX_MEMO_KEY) {
      _memo[key] = value;
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