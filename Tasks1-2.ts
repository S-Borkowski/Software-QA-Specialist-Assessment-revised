function isPalindrome(str: string): boolean {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("racecar") == true);
console.log(isPalindrome("hello") == false);
console.log(isPalindrome("level") == true);

function countMultiples(arr: number[]): number {
    return arr.filter(num => num % 4 === 0 || num % 6 === 0).length;
}

console.log(countMultiples([2, 4, 6, 8, 10]) == 3);
console.log(countMultiples([3, 6, 9, 12, 15]) == 2);
console.log(countMultiples([1, 2, 3, 4, 5]) == 1);
