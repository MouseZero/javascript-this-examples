class TestClass {
  getString() {
    return 'from class'
  }

  testFunction() {
    return this.getString()
  }
}

module.exports = TestClass
