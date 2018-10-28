const {expect} = require('chai')

const TestClass = require('../src/TestClass')

describe('TestClass this', () => {
  it('Class should have testFunction', () => {
    const testClass = new TestClass()
    expect(typeof testClass.testFunction).to.equal('function')
  })

  it('Class should get the string using this', () => {
    const testClass = new TestClass()
    expect(testClass.testFunction()).to.equal('from class')
  })

  it('testFunction can not loss its this.getString function', () => {
    function getString() {
      return 'from test code'
    }
    const injectNewThis = {
      getString: () => {
        return 'from test code'
      }
    }
    const testClass = new TestClass()
    const func = (testClass.testFunction).bind(injectNewThis)
    expect(func()).to.equal('from class')
  })
})
