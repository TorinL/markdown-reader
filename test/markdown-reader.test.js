const chai = require('chai')
const assert = chai.assert
const markDownParser = require('../src/markdown-reader.js')

describe('can parser inputs', function(){
  it('markdown is successfully passed to the parser', function(){
   assert.equal(markDownParser('hello world'), 'hello world', 'returns a string')
  })
  it('breaks down a string into composable parts', function(){
    const expectedOutput = ['a', 'b', 'c']
    assert.deepEqual(markDownParser('a\nb\nc'), expectedOutput, 'should return an array of strings')
  })
  it('', function(){
    assert.deepEqual(markDownParser(), thing, 'should do whshit')
  })
})
