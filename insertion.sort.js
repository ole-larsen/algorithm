export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i];
    let j = i - 1;
    
    while (arr[j] > tmp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}
