function markDownParser(markdown){
  console.log(markdown.split('\n'));
  return markdown.split(/[\r?\n]+/)
}


module.exports = markDownParser
