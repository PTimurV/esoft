function isValidParentheses(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in map) {
            stack.push(char);
        } else {
            const lastOpenBracket = stack.pop();
            if (char !== map[lastOpenBracket]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Примеры использования:
console.log(isValidParentheses("()"));       // true
console.log(isValidParentheses("()[]{}"));   // true
console.log(isValidParentheses("(]"));       // false
console.log(isValidParentheses("([)]"));     // false
console.log(isValidParentheses("{[]}{[]}{[]}{[]}"));     // true