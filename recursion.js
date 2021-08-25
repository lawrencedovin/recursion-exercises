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

function everyOther(str, i=0, newStr="") {
  //Base Case
  if(i === str.length) return newStr;
  if(i % 2 === 0) newStr += str[i];
  return everyOther(str, i+1, newStr);
}

console.log(everyOther("hello"))

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
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
