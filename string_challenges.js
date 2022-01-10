
/* 

1- Write a JavaScript function to check whether a string is blank or not.

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


2- Write a JavaScript function to hide email addresses to protect from unauthorized user.

function protect_email(x){
     
    return x.substring(0,3)+"..."+x.substring(x.length-12);

}

console.log(protect_email("robin_singh@example.com"));




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



function string_chop(a,b){
     c =[];
     n =0;
        for (let i = 0; i < a.length; i+=b) {
            if ((i+b) % b==0){
                c[n]= a.substring(i,i+b);
                n++;
            }
            else{
                c[n] = a.substring(i);
                n++;
            }
          


    }
    return c;
}

console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));



function truncate_string(a,b){
    return a.substring(0,b);
}

console.log(truncate_string("Robin Singh",4));



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



function endsWith(input, string){

    let index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}


console.log(endsWith('JS string exercises', 'exercises'));


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

*/