//stack is a linear data structure that follows the LIFO (last in first out) principle

export class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    push(element) {
        this.dataStore[this.top++] = element;
    }
    pop() {
        return this.dataStore[--this.top];
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    clear() {
        this.top = 0;
        this.dataStore = [];
    }
    length() {
        return this.top;
    }
}
function mulBasre(num, base) {
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}
console.log(mulBasre(10, 2));

function isPalindrome(word) {
    let s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    let rWord = "";
    while (s.length() > 0) {
        rWord += s.pop();
    }
    if (word === rWord) {
        return `${word} is a palindrome`;
    }
    else {
        return `${word} is not a palindrome`;
    }
}
console.log(isPalindrome("Hello"));

function factorial(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--)
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop()
    }
    return product
}
console.log(factorial(5))
function isParenthesesBalanced(expression) {
    let s = new Stack();
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "(") {
            s.push(expression[i]);
        }
        else if (expression[i] === ")") {
            if (s.length() === 0) {
                return false;
            }
            else {
                s.pop();g
            }

        }

    }
    if (s.length() === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isParenthesesBalanced("5 + (3 * (2 - 1))")); // true
console.log(isParenthesesBalanced("((3 + 2) * (1 + 4)")); // false
console.log(isParenthesesBalanced(")3 + 2(")); // false
/* 
var s = new Stack();
s.push("Ali");
s.push("Mohamed");
s.push("Ahmed");
console.log("length: ", s.length());
s.pop();
console.log("length: ", s.length());
console.log("peek: ", s.peek());
s.clear();
console.log("length: ", s.length()); */
