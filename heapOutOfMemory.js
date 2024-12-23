let memoryAllocations = [];

const field = "heapUsed";
const allocateSize = 10000 * 1024; // 10MB size of array
const TIME_INTERVAL = 20;

// allocate memory for an array
function allocateMemory(size) {
  const numbers = size / 8;
  const arr = [];
  arr.length = numbers;
  for (let i = 0; i < numbers; i++) {
    arr[i] = i;
  }
  return arr;
}
let time = 0;

setInterval(() => {
  const Arr = allocateMemory(allocateSize);
  
  //pushing the allocated memory to the memoryAllocations array each time
  memoryAllocations.push(Arr);
  if (time % 100 == 0) {
    memoryAllocations = [];
  }

  //calculating the memory usage each time
  const mu = process.memoryUsage();
  memoryAllocations.push([]);
  const gbNow = mu[field] / 1024 / 1024 / 1024;
  const gbRounded = Math.round(gbNow * 100) / 100;
  console.log(gbRounded);
}, TIME_INTERVAL);
