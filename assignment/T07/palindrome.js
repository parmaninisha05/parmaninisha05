let input = prompt("Please enter a word.: ");
console.log(input);
arr = String(input).split("");
let length = arr.length; //Taking length of the word in length
let i = 0,
  j = length - 1;
let isPalindrome = true;
while (i < j) {
  console.log(i, j);
  if (arr[i] === arr[j]) {
    //Checking from both left and right hand side each letter of the word.
    i++;
    j--;
  } else {
    console.log("They are not palindrome");
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log("They are palindrome");
}
