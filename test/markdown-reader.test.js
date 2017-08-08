const chai = require('chai')
const assert = chai.assert
const markDownParser = require('../src/markdown-reader.js')

describe('can parser inputs', function(){
  it('markdown is successfully passed to the parser', function(){
   assert.equal(markDownParser('hello world'), 'hello world', 'returns a string')
  })
})
