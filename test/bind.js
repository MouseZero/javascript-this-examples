const {expect} = require('chai')

describe('bind', () => {
  it('can not bind on top of original bind', () => {
    const a = {foo: 'bar'}
    const b = {foo: 'qux'}

    function func () {
      return this.foo
    }

    const newFunc = func.bind(a)
    const newNewFunc = newFunc.bind(b)

    expect(newFunc.apply(b)).to.equal('bar')
    expect(func.apply(b)).to.equal('qux')
    expect(newNewFunc()).to.equal('bar')
  })

  it('this inside function not effected by outside enviornment',
  function () {
    const a = {foo: 'bar'}

    function func () {
      return this.foo
    }

    ;(function () {
      expect(this.foo).to.equal('bar')
      expect(func()).to.equal(undefined)
      expect(func.apply(a)).to.equal('bar')
    }).apply(a)


  })
})
