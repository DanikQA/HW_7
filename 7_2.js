function uniqueValues (arr, arr1) {
    return [...new Set([...arr, ...arr1])];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray);