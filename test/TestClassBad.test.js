const {expect} = require('chai')

const TestClassBad = require('../src/TestClassBad')

describe('JavaScript This', () => {
  it('Class should not have testFunction', () => {
    const testClass = new TestClassBad()
    expect(typeof testClass.testFunction).to.equal('function')
  })
})
