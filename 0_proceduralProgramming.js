const isPalindrom = str =>
    str === str.split('').reverse().join('');

//result
console.log(isPalindrom('тест'));
console.log(isPalindrom('шалаш'));