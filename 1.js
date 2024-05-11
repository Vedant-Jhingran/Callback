let numbers = [1,2,3,4,5];

let newArray = [];

function double(arr, callback) {
    console.log(callback(arr));
}

function callback(arr) {
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i]*2;
        newArray.push(x);
    }
    return newArray;
}

double(numbers, callback);