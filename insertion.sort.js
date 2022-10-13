export default function insertionSort(arr) {
  let index, value;

  for (let i = 1; i < arr.length; i++) {
    value = arr[i];
    index = i;
    
    while (index > 0 && arr[index - 1] > value) {
      arr[index] = arr[index - 1];
      index = index - 1;
    }
    
    arr[index] = value;
  }
  
  return arr;
}
