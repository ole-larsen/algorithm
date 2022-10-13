export default function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  
  if (arr.length === 2) {
    return arr[1] < arr[0] ? [arr[1], arr[0]] : arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)], less = [], greater = [];

  for (const item of arr) {
    if (item < pivot) {
      less.push(item);
    }
    if (item > pivot) {
      greater.push(item);
    }
  }
  
  return quickSort(less).concat(pivot, quickSort(greater));
}
