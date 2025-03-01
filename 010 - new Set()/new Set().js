const number = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8];
const string = ['a', 'a', 'b', 'c', 'd', 'e', 'e'];

const uniqueNum = [...new Set(number)];
const uniquestr = [...new Set(string)];

console.log(uniqueNum);
console.log(uniquestr);