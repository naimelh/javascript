

/* 1- Write a JavaScript function to check whether a string is blank or not. */

function is_Blank(x){

    if($x == ""  ){
        return true;
    }

    else{
        return  false;
    }

}


console.log(is_Blank('')); 
console.log(is_Blank('abc'));


/* 2- Write a JavaScript function to hide email addresses to protect from unauthorized user. */

function protect_email(email){
     
    
    const gedeelte = email.split("@");
    const deel1 = gedeelt[0];
    const gem = Math.floor(deel1.length / 2);
    deel1 = deel1.substring(0, (deel1.length - gem));
    const deel2 = gedeelt[1];
    return deel1 + "...@" + deel2;

}



console.log(protect_email("robin_singh@example.com"));


/* 3- Write a JavaScript function to insert a string within a string at a particular position (default is 1). */ 

function insert(a, b="", c=1){
    
    if(c == 1){
        return a = b + a;
    }

    else{

        return a.substring(0,c-1) +" "+ b + a.substring(c,a.length-1);

}
}

console.log(insert('We are doing some exercises.','JavaScript ',18));
console.log(insert('We are doing some exercises.','JavaScript ',18));
console.log(insert('We are doing some exercises.','JavaScript '));

/* 4- Write a JavaScript function to chop a string into chunks of a given length. */

function string_chop(str,nr){
     const c =[];
     let n =0;
        for (let i = 0; i < str.length; i+=nr) {
            if ((i+nr) % nr==0){
                c[n]= str.substring(i,i+nr);
                n++;
            }
            else{
                c[n] = str.substring(i);
                n++;
            }
          


    }
    return c;
}

console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));


/* 5- Write a JavaScript function to truncate a string to a certain length. */ 


function truncate_string(a,b){
    return a.substring(0,b);
}

console.log(truncate_string("Robin Singh",4));


/* 6- Write a JavaScript function to test whether the character at the provided (character) index is lower case.*/ 

function isLowerCaseAt(a,b){

    letter = a.substring(b-1,b);
    if(letter == letter.toUpperCase()){
        return true; 
    }
    else{
        return false;
    }

}

console.log(isLowerCaseAt ('Js STRING EXERCISES', 3));


/* 7- Write a JavaScript function to test whether a string ends with a specified string.
*/

function endsWith(input, string){

    let index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}


console.log(endsWith('JS string exercises', 'exercises'));

/*8- Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.*/


function guid(len) {
    let buf = [];
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        charlen = chars.length,
        length = len || 32;
        
    for (let i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen));
    }
    
    return buf.join('');
}

console.log(guid());  
console.log(guid(15));

