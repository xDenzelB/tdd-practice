// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply
    
} from '../functions.js';

const { test, skip } = QUnit;

test('This test changes the string ', (expect) => {
    const expected = 'Bunny!!!';

    const actual = addExclamationPoints('Bunny');

    expect.equal(actual, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('This test multiplies number by 7', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, 'Should return 28!!');
});


test('This test multiplies 12 then half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);
    
    expect.equal(actual, expected, 'Should return 24!!');
});

test('This should take 3 numbers, divide, then multiply', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);
    
    expect.equal(actual, expected, 'Should return 10!!');
});
    


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
