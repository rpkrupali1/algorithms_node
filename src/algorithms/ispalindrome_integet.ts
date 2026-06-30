// Palindrome Number
/*Given an integer x, return true if x is a palindrome, and false otherwise. 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

//check if it is palindrome by using string conversion
export function isPaindrome_usingStringConv(x: number): boolean {
    if (x < 0) return false;
    const str = x.toString();
    let reverseStr = '';
    for(let i=str.length-1;i>=0;i--)
        reverseStr += str[i];
    if(str === reverseStr)
        return true;
    return false;
}

export function isPaindrome_usingStringSplit(x: number): boolean {
    if (x<0) return false;
    const str = x.toString();
    const revStr = str.split('').reverse().join('');
    console.log(revStr)
    if(str === revStr) return true;
    return false;
}

export function isPaindrome_usingPointers(x: number): boolean{
    if (x < 0) return false;
    const str = x.toString();
    let left = 0;
    let right = str.length - 1;
    while(left<right){
        if(str[left]!==str[right]) return false;
        left++;
        right--;
    }
    return true;
}