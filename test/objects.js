const {expect} = require('chai')

describe('objects', () => {
  it('non arrow function uses object as this', () => {
    const obj = {
      prop: 'foo',
      func: function() {
        return this.prop
      },
      func2: () => {
        return this.prop
      }
    }

    expect(obj.func()).to.equal('foo')
    expect(obj.func2()).to.equal(undefined)
  })

  it('non arrow function can be added after the fact and still keep this', () => {
    const obj = { prop: 'foo' }

    obj.func = function() {
      return this.prop
    }

    obj.func2 = () => {
      return this.prop
    }

    expect(obj.func()).to.equal('foo')
    expect(obj.func2()).to.equal(undefined)
  })

  it('arrow function copies this of parrent', () => {
    this.foo = 'bar'
    const arrowFunc = () => this.foo
    const normalFunc = function () { return this.foo }
    const arrowNestedFunc = () => () => this.foo
    const bothFunc = () => function () {
      return this.foo
    }

    expect(arrowFunc()).to.equal('bar')
    expect(normalFunc()).to.equal(undefined)
    expect(arrowNestedFunc()()).to.equal('bar')
    expect(bothFunc()()).to.equal(undefined)
  })

  it('when a function is called out of its object it losses its this', () => {
    const foo = {
      prop: 44,
      bar: function () {
        return this.prop
      }
    }

    const barOutOfObject = foo.bar

    expect(foo.bar()).to.equal(44)
    expect(barOutOfObject()).to.equal(undefined)
    expect(barOutOfObject.apply(foo)).to.equal(44)
  })
})
