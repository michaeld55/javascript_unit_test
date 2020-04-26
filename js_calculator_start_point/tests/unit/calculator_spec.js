var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should have a previous operator', function(){
    const actual = calculator.previousOperator 
    assert.strictEqual(actual, null)
  })

  it('it should have a previous total', function(){
    const actual = calculator.previousTotal 
    assert.strictEqual(actual, 0)
  })

  it('it should have a new total', function(){
    const actual = calculator.newTotal 
    assert.strictEqual(actual, true)
  })

  it('it should have a running total', function(){
    const actual = calculator.runningTotal 
    assert.strictEqual(actual, 0)
  })

  it('it should be able to add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    const actual = calculator.runningTotal
    const expected = 5
    assert.strictEqual(actual, expected)
  })

  it('it should be able to subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const actual = calculator.runningTotal
    const expected = 3
    assert.strictEqual(actual, expected)
  })

  it('it should be able to multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const actual = calculator.runningTotal
    const expected = 15
    assert.strictEqual(actual, expected)
  })

  it('it should be able to divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const actual = calculator.runningTotal
    const expected = 3
    assert.strictEqual(actual, expected)
  })

  it('it should be able to handle multiple number clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    const actual = calculator.runningTotal
    const expected = 123
    assert.strictEqual(actual, expected)
  })

  it('it should be able to and operator clicks', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    const expected = 3
    assert.strictEqual(actual, expected)

  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    const expected = 4
    assert.strictEqual(actual, expected)
  })

});
