/*

function checkPalindrome(str) {

    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'geen palindroom';
        }
    }
    return 'Wel een palindroom';
}



function random(item)
{
  
    return item[Math.floor(Math.random()*item.length)];
     
}


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


const array = [1, 2, 3, 4, 5, 6];
let s = 0;
let p = 1;
let i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log(`Sum : ${s} Product :  ${p}`); 




function remove_array_element(array, n)
 {
   const index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 5));



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


 function BiggerElements(val)
 {
   return function(evalue, index, array)
   {
   return (evalue >= val);
   };
 }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);


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



const myNames = ["John","Cindy","Omer","Barbie","Barbie"];

function removeSpecificelement(myNames,woord){

  const index = myNames.indexOf(woord);
  myNames.splice(index,1)
  return myNames;

}

 
console.log(removeSpecificelement(myNames,"Barbie"));

 

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

*/