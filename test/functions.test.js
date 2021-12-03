// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,

    
} from '../functions.js';

const { test, skip } = QUnit;

test('This test changes the string ', (expect) => {
    const expected = 'Bunny!!!';

    const actual = addExclamationPoints('Bunny');

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
test('Takes 3 numbers and returns as an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);
    
    expect.deepEqual(actual, expected, 'Should return [8, 4, 5]!!');
});
    
test('Takes 3 numbers and returns as a string then mush together', (expect) => {
    const expected = 845;

    const actual = returnAsAString(8, 4, 5);
    
    expect.deepEqual(actual, expected, 'Should return 845!!');
});
test('Takes 2 numbers and return greeting with the sum of numbers', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);
    
    expect.deepEqual(actual, expected, 'Should return with sum of 12');
});
test('Should take an array and get the second item', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']
    );
    
    expect.deepEqual(actual, expected, 'Should return Apple');
});
test('Should take an array and get the last item', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']
    );
    
    expect.deepEqual(actual, expected, 'Should return plum');
});
    


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
