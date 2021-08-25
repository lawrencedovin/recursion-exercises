/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  // Base Case
  if(i === nums.length) return 1;
  // Normal Case
  return nums[i] * product(nums, i+1);
}

console.log(product([2, 3, 4]));

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, largest = 0) {
  //Base Case
  if(i === words.length) return largest;
  //Normal Case
  if(largest < words[i].length) largest = words[i].length;
  return longest(words, i+1, largest);
}

console.log(longest(["hello", "hi", "hola"]));

/** everyOther: return a string with every other letter. */

function everyOther(str) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
