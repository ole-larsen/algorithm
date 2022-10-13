function mergeHelper(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    sorted.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return [...sorted, ...left, ...right]
}

export default function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const middleIndex = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, middleIndex)),
        right = mergeSort(arr.slice(middleIndex));

  return mergeHelper(left, right)
}
