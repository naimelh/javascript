
/* 1. Write a JavaScript function to check if a certain word is a Palindrome.*/
function checkPalindrome(str) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'geen palindroom';
        }
    }
    return 'Wel een palindroom';
}



/*2. Write a JavaScript function to get a random item from an array.*/

function random(item)
{
  
    return item[Math.floor(Math.random()*item.length)];
     
}

/* 3. Write a JavaScript program which accept a string as input and swap the case of each character. */ 

for(var x=0; x<str.length; x++)
{
  if(UPPER.indexOf(str[x]) !== -1)
  {
    result.push(str[x].toLowerCase());
  }
  else if(LOWER.indexOf(str[x]) !== -1)
  {
    result.push(str[x].toUpperCase());
  }
  else 
  {
    result.push(str[x]);
  }
}


/* 4.Write a JavaScript function to compute the sum of an array of integers.*/

/* 5. Write a JavaScript function to remove a specific element from an array */

function removeSpecificelement(myNames,woord){

  const index = myNames.indexOf(woord);
  myNames.splice(index,1)
  return myNames;

}

 
console.log(removeSpecificelement(myNames,"Barbie"));

/* 6. Write a function to remove all strings with less than X characters from an array of strings */ 

function remove_array_element(array, n)
 {
   const index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));

/* 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers. */

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));

 /* 8. Write a JavaScript function that returns array elements larger than a number */

 function BiggerElements(val)
 {
   return function(evalue, index, array)
   {
   return (evalue >= val);
   };
 }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);



/* 9. Write a Javascript function to generate a random color in format rgb(0,0,0); */




/* 10. Write a JavaScript program to find the types of a given angle.  Go to the editor	
  Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */


function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle.";
    }
    if(angle === 90) {
      return "Right angle.";
    }
    if(angle < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }


/* 11. Write a JavaScript function to merge two arrays and removes all duplicates elements. */

  function merge_array(array1, array2) {
    const result_array = [];
    const arr = array1.concat(array2);
    let len = arr.length;
    const assoc = {};

    while(len--) {
        const item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}



/* 12. given [2,1,6,4]
    expected => [8,1,216,64] => the power 3
    thirdPower([2,1,6,4])
*/

/* 13. given [2,1,6,4]
    expected => [8,1,216,64] => the power N
   nthPower([2,1,6,4],16)
*/

/* 14. given [2,1,6,4]
    calc avg
    calc sum    (reduce)
*/


/* 15. given ["Ellen","bert","Bart","zaki","Sandra","Soroush"]
  remove all the names that do not start with a capital */ 

const Names = ["Ellen","bert","Bart","zaki","Sandra","Soroush"];

function removeNamesCapital(Names){

  Names.forEach(function(name){

    letter = name.substring(0,1);
    if(letter !== letter.toUpperCase()){
      let index = Names.indexOf(name);
      Names.splice(index,1)
    }
    
   })
  return Names;
}


console.log(removeNamesCapital(Names));


/* 16. Write a Javascript function to find how many times a certain number occurs in that array. */
/* 17. Write a JavaScript program to find the most frequent item of an array. */ 
