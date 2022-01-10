/*

function generateMultiplicationTable(number){
    table=[];
    for(let i =0; i < 11 ; i++){

        table[i] = i * number;
    }

return table 
}

console.log(generateMultiplicationTable(10));



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



function isDivisible(a,b){

    if(a%b == 0){
        return true;

    }
    else{
        return false;
    }

}

console.log(isDivisible(333,3));



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


function getDistance(a,b){
    let x = b[0]- a[0];
    let y = b[1]- a[1];

    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}

console.log(getDistance([20,100],[50,800]));
*/