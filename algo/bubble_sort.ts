export default function bubble_sort(arr:number[]) {

 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 -i; j++) {

      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
 }

  return arr;
}

let myArr = [2,3,1,4,7,5,6];

console.table(bubble_sort(myArr));

