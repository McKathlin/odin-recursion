module.exports = (function () {
  // Sorts a subarray in place.
  // To conserve space, no return value is given.
  const _mergeSortPart = function(arr, startIndex, stopIndex) {
    // Handle the basis case.
    const partSize = stopIndex - startIndex;
    if (partSize <= 1) {
      return; // No sorting to do in this subarray.
    }
    if (partSize == 2) {
      // Sort this two-item subarray.
      if (arr[startIndex] > arr[startIndex + 1]) {
        const larger = arr[startIndex];
        arr[startIndex] = arr[startIndex + 1];
        arr[startIndex + 1] = larger;
      }
      return;
    }

    // If we're here, this subarray has more than two elements.
    // Sort the left and right parts of this subarray.
    let middleIndex = Math.floor((startIndex + stopIndex) / 2);
    _mergeSortPart(arr, startIndex, middleIndex);
    _mergeSortPart(arr, middleIndex, stopIndex);
    
    // Merge left and right.
    leftArr = arr.slice(startIndex, middleIndex);
    rightArr = arr.slice(middleIndex, stopIndex);

    let leftIndex = 0;
    let rightIndex = 0;
    for (let i = startIndex; i < stopIndex; i++) {
      let isRightNext;
      if (leftIndex >= leftArr.length) {
        isRightNext = true;
      } else if (rightIndex >= rightArr.length) {
        isRightNext = false;
      } else {
        isRightNext = (rightArr[rightIndex] < leftArr[leftIndex]);
      }

      if (isRightNext) {
        arr[i] = rightArr[rightIndex];
        rightIndex++;
      } else {
        arr[i] = leftArr[leftIndex];
        leftIndex++;
      }
    }
    return;
  }

  // Sorts an array in place and returns the sorted array.
  return function mergeSort (arr) {
    _mergeSortPart(arr, 0, arr.length);
    return arr;
  };
}());