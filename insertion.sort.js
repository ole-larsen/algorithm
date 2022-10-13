export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    while (arr[i - 1] > arr[i]) {
      arr[i] = arr[i - 1];
    }
  }
  return arr;
}
