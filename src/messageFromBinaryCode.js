function solution(code) {
    return code.match(/.{8}/g).map(x => String.fromCharCode(parseInt(x, 2))).join('');
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test messageFromBinaryCode

// alternative solution
