export default function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  
  const pivotIndex = Math.floor(arr.length / 2), 
        pivot = arr[pivotIndex];
  
  const [less, greater] = arr.reduce((accumulator, value, index) => {
    if (value < pivot || (value === pivot && index !== pivotIndex)) {
      accumulator[0].push(value);
    }
  
    if (value > pivot) {
      accumulator[1].push(value);
    }
    
    return accumulator
  }, [[], []]);
  
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
