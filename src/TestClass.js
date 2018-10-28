class TestClass {
  constructor() {
    this.testFunction = this.testFunction.bind(this)
  }

  getString() {
    return 'from class'
  }

  testFunction() {
    return this.getString()
  }
}

module.exports = TestClass
