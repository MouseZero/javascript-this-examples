const {expect} = require('chai')

const TestClassBad = require('../src/TestClassBad')

describe('TestClassBad this', () => {
  it('Class should have testFunction', () => {
    const testClass = new TestClassBad()
    expect(typeof testClass.testFunction).to.equal('function')
  })

  it('Class should get the string using this', () => {
    const testClass = new TestClassBad()
    expect(testClass.testFunction()).to.equal('from class')
  })

  it('Class can loss its this.getString function', () => {
    function getString() {
      return 'from test code'
    }
    const injectNewThis = {
      getString: () => {
        return 'from test code'
      }
    }
    const testClass = new TestClassBad()
    const func = (testClass.testFunction).bind(injectNewThis)
    expect(func()).to.equal('from test code')
  })
})
