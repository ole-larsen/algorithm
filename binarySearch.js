export default function binarySearch(item, arr) {
  let lowIndex = 0, highIndex = arr.length - 1;
  
  while (lowIndex <= highIndex) {
    const middleIndex = Math.floor((lowIndex + highIndex) / 2);
    const guess = arr[middleIndex];
    
    if (guess === item) {
      return middleIndex;
    }
    
    if (item > guess) {
      lowIndex = middleIndex + 1;
    }
    
    if (item < guess) {
      highIndex = middleIndex - 1;
    }
  }

  return null;
}
