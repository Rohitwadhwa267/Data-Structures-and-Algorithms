// remove-outermost-parentheses


 
var str = "(()())(())";

var removeOuterParentheses = function(S) {
    let stack = [];
    let res = "";
    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(") {
            if (stack.length > 0) {
                res += "(";
            }
            stack.push(S[i]);
        } else {
            if (stack.length > 1) {
                res += ")";
            }
            stack.pop();
        }
    }
    return res;
}

console.log(removeOuterParentheses(str));