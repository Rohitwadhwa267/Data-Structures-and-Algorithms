// check-if-the-given-string-is-palindrome-or-not

const isPalindrome = (str, s, e) => {
    // Base case: if the start index is greater than or equal to the end index, it's a palindrome
    if (s >= e) {
        return true;
    }
    // If characters at start and end index are not the same, it's not a palindrome
    if (str[s] !== str[e]) {
        return false;
    }
    // Recursively check the next pair of characters
    return isPalindrome(str, s + 1, e - 1);
}

const str = "ma d am";
const s = 0;
const e = str.length - 1;
console.log(isPalindrome(str, s, e)); // true
