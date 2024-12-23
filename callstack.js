function outer() {
    const LargeArray = [];
    // function inner is closed over the LargeArray variable
    return function inner() {
        LargeArray.push('Hello');
        console.log('LargeArray: ', LargeArray);
    };
};

// use to repeat a function upto num times.
function repeat(fn, num) {
    for (let i = 0; i < num; i++) {
        fn();
    }
}
// each outer function  call pushes another 'Hello' to the LargeArray
repeat(outer, 10);
// now imagine repeat(outer, 100000)