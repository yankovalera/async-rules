const {all} = require("./all")
const {multiply} = require("./multiply")

const allRules = all([multiply]);

const inputs = [{ id: 1, a: 2, b: 3 }, { id: 2, a: 4, b: 5 }];

async function runRules(inputs) {
    const result = await Promise.all(inputs.map(async input => { return await allRules.run({input, output: []})}))
    
    console.dir(result); // { input: { a: 2, b: 3, result: 6 } }
}

runRules(inputs)