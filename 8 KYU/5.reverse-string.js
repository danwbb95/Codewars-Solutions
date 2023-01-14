/*

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

function solution(str){
    let reversedArr = [];
    
    for (let i = (str.length - 1); i >= 0; i--) {
      reversedArr.push(str[i]);
    }
    
    return reversedArr.join('');
}

/* Other Solutions */

function solution(str){
    return str.split('').reverse().join('');  
  }