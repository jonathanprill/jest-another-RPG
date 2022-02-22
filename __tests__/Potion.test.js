/////////////////////////////////////DELETED TEST//////////////////////////////////////////
// const checkIfEqual = require('../lib/random.js');

// test('checks if 10 is equal to 10', () => {
//   expect(checkIfEqual(10, 10)).toBe(true);
// });




// toBeGreaterThanOrEqual() and toBeLessThanOrEqual() functions are provided by Jest,
// const randomNumber = require('../lib/random.js');

// test('gets random number between 1 and 10', ()=> {
//     expect(randomNumber()).toBeGreaterThanOrEqual(1);
//     expect(randomNumber()).toBeLessThanOrEqual(10);
// });

// module.exports = function(val1, val2) {
//     if (val1 === val2) {
//       return true;
//     } else {
//       return false;
//     }
//   };

// function randomNumber() {
//     return Math.floor(Math.random() * 9 + 1);
// }
// module.exports = randomNumber;
/////////////////////////////////////DELETED TEST//////////////////////////////////////////

const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    //Notice that we can give the potion instance and the constructor function the same name because
    //the P in Potion() is capitalized in the constructor function, and the variable name is lowercase.
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});