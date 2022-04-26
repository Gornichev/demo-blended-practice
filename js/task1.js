 // task Polindrom
function palindrome (str){
  str = str.toLowerCase()
  return str === str.split("").reverse().join("")

}
console.log(palindrome('aB2brgrta'))
console.log(palindrome('aBba'))
console.log(palindrome('abba'))
console.log(palindrome('AbbA'))
 // task Polindrom

