/* eslint-disable no-undef */
const { assert } = require('chai');
const fact = require('../factorial');

const n = 4;
const a = 5;
const y = 6;

describe('Calculate factorial of number', () => {
  it(`Function returns ${n}!`, () => {
    const result = fact.numFactorial(n);
    assert.equal(result, 24);
  });
});

describe('Calculate factorial of number', () => {
  it(`Function returns ${a}!`, () => {
    const result = fact.numFactorial(a);
    assert.equal(result, 120);
  });
});

describe('Calculate factorial of number', () => {
  it(`Function returns ${y}!`, () => {
    const result = fact.numFactorial(y);
    assert.equal(result, 720);
  });
});
