const arr = [12, 34, 56, 67];
const typedArray = new Int32Array([10, 20, 30, 40, 50]);
arr.push("hiiiii");
console.log("Array after adding value : ", arr);
arr[9] = 9999;
console.log("Array after adding value at index9 : ", arr); // gives empty values in between
console.log("TypedArray : ", typedArray);
// typedArray.push('2222') // gives err since typed array dont allow push pop methods
typedArray[1] = 90;
console.log("After updating index1 : ", typedArray);
typedArray[9] = 7777; // changes nothing since no 9th index in typed array
console.log("After updating index9 : ", typedArray);

const arr1 = new Uint8Array(5);
console.log(arr1);
// arr1.set([1, 2, 3, 4, 5], 1); // gives out of bound err since array length trying to set from index1 is larger than array created
arr1.set([1, 2, 3, 4], 1);
console.log("arr1 after adding values using set : ", arr1);

const sub = arr1.subarray(2, 5); // creates subarray from index2 to index5 excluding index5
console.log("subarray from arr1 : ", sub);

sub.fill(99); // updates all value with 99
console.log("After updating subarray using fill : ", sub);

const doubled = typedArray.map((a) => a * 2); // not a typed array(returns normal array)
console.log("Using map in typed array : ", doubled);

const filtered = typedArray.filter((a) => a > 30); // not a typed array(returns normal array)
console.log("Filtered array : ", filtered);

const sum = typedArray.reduce((acc, val) => acc + val, 0);
console.log("Using Reduce : ", sum);

const sliced = typedArray.slice(1, 4); // returns typed array
console.log("Array after slicing : ", sliced);

const reverse = typedArray.reverse();
console.log("Reversing the array : ", reverse);

const sorted = typedArray.sort();
console.log("Sorting the array : ", sorted);

const joined = typedArray.join("-");
console.log("Joining arrays using - : ", joined);

const arr2 = typedArray.forEach((value) =>
  console.log("Using ForEach : ", value * 2)
);

// Convert noraml array to typed array

const normal_array = [1,2,3,4]
console.log('normal_array: ', normal_array);
const typed_array = new Int16Array(normal_array)
console.log('typed_array: ', typed_array);
