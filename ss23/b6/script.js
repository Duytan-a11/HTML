let input = [NaN, "test", 4]; 
let output = [];

for (let i = 0; i < input.length; i++) {
    if (input[i]) {
        output.push(input[i]);
    }
}

console.log(output);