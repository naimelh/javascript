/*1. Write a JavaScript function that returns an array with generated  Multiplication Table of a given number (max. 1000 iterations)*/

function generateMultiplicationTable(number){
    table=[];
    for(let i =0; i < 11 ; i++){

        table[i] = i * number;
    }

return table 
}

console.log(generateMultiplicationTable(10));


/* 2. extension of first challenge:

	Every time a value in the array is divisible by 20 add an (asterisk)* to it */

function generateMultiplicationTable(number){
    table=[];
    for(let i =0; i < 11 ; i++){

        if ((i*number) % 20 == 0){
            
            table[i] = i*number + "*" ;
        }
        else{
            table[i] = i*number
        }
    }

return table 
}

console.log(generateMultiplicationTable(5));



/* 3. Write a Javascript function to return wether a value is divisible by a certain number */

function isDivisible(a,b){

    if(a%b == 0){
        return true;

    }
    else{
        return false;
    }

}

console.log(isDivisible(333,3));

/* 4. Write a Javascript function that return an array with even numbers between a range */ 

function getEvenNumbersInRange(a,b){
    let length = b-a;
    let even = [];
    let next_getal = a;
    for(let i = 0; i<length; i++){
        if(next_getal % 2==0){
            even.push(next_getal);
            next_getal += 1;
        }
        else{
            next_getal += 1;
        }
    }
    return even;
}

console.log(getEvenNumbersInRange(56,1211));

/* 5. Write a Javascript function that calculate the distance between two coordinates. */ 

function getDistance(a,b){
    let x = b[0]- a[0];
    let y = b[1]- a[1];

    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}

console.log(getDistance([20,100],[50,800]));
