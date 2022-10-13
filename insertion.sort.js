export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i], 
        j = i - 1;

    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = tmp;
  }
  return arr;
}
