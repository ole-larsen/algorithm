function findSmallest(arr) {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}

export default function selectionSort(arr) {
  const sorted = [];
  while (arr.length) {
    const smallestIndex = findSmallest(arr);
    const smallest = arr[smallestIndex];
    sorted.push(smallest);
    arr.splice(smallestIndex, 1);
  }
  return sorted;
}
