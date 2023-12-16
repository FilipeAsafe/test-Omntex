function isValidBrackets(sequence) {

    const stack = [];


    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };


    for (let i = 0; i < sequence.length; i++) {
        const bracket = sequence[i];


        if (bracketPairs[bracket]) {

            stack.push(bracket);
        } else {

            const lastBracket = stack.pop();


            if (bracket !== bracketPairs[lastBracket]) {
                return false;
            }
        }
    }


    return stack.length === 0;
}


console.log(isValidBrackets("(){}[]"));         // is valid - true
console.log(isValidBrackets("[{()}](){}"));     // is valid - true
console.log(isValidBrackets("[]{()"));          // is not valid - false
console.log(isValidBrackets("[{)]"));            // is not valid - false 
