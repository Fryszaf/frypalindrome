function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome('radar')); // true
  console.log(isPalindrome('hello')); // false
  