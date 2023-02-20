// (a) Print the odd numbers in an array-----------------------------------------------------------x

    //Input
    let input = [2,1,9,5,10,13];

    //Anonymous function*****
    let odd = function(arr){
        return(arr.filter(val => (val%2 === 1)));
    }

    console.log(odd(input));
 
    //IIFE*****
    (function(arr)
    {console.log(arr.filter(val => (val%2 === 1)))}
    )
    (input)

    // Arrow function*****

    let oddarr = (arr) =>  {console.log(arr.filter(val => (val%2 === 1)))}
    oddarr(input);

// (b) Covert Array of strings to tilte case---------------------------------------------------------x

    //Input

    let arr = ["hello","geek","bruno","aadhi","ana"];

    //Anonymous function*****
    let capitalize = function(arr){
        arr.forEach(element => {
            console.log(element.replace(element[0],element[0].toUpperCase()))
        })
    }
    capitalize(arr);
    
    //IIFE*****
    (function(arr){
        arr.forEach(element => {
            console.log(element.replace(element[0],element[0].toUpperCase()))
        })
    })(arr)

    // Arrow function*****
    let capital = arr => {
        arr.forEach(element => {
        console.log(element.replace(element[0],element[0].toUpperCase()))
    })
    }
    capital(arr);


// (c) Sum of all numbers in a array----------------------------------------------------------x

    //Input
    let arr3 =[10,30,5,50,5];

    //Anonymous function*******************************

    let sum = function(arr){
        let res=0;
        for (let i in arr)  
            res = arr[i]+res; 
        
        console.log(res);
    }
    sum(arr3);

    //IIFE**********************************************

    (function(arr){
        let res=0;
        for (let i in arr)  
            res = arr[i]+res; 
        console.log(res);
    })
    (arr3);

    // Arrow function*****

    let sum_arr = arr => {
        let res=0;
        for (let i in arr)  
            res = arr[i]+res; 
        console.log(res);
    }
    sum_arr(arr3);

// (d) Return all the prime numbers in an array-------------------------------------------------x

    //Input

    let arr4 = [2,9,17,22,15,11];

    //Anonymous function*******************************

    let isprime = function(arr){
    
        let prime = function(n){
        if(n<2)
            return false;
        else{
            for(i=2;i<Math.sqrt(n);i++){
                if(n%i===0)
                    return false;
            }
        return true;
            }
        }
    
        console.log(arr.filter( n => prime(n)));
    }
    
    isprime(arr4);

    // IIFE********************************************

    (function(arr){
    
        let prime = function(n){
        if(n<2)
            return false;
        else{
            for(i=2;i<Math.sqrt(n);i++){
                if(n%i===0)
                    return false;
            }
        return true;
            }
        }
        console.log(arr.filter( n => prime(n)));
    })(arr4);

    // Arrow function*****

    let is_prime = arr => {
    
        let prime = n => {
        if(n<2)
            return false;
        else{
            for(i=2;i<Math.sqrt(n);i++){
                if(n%i===0)
                    return false;
            }
        return true;
            }
        }
    
        console.log(arr.filter( n => prime(n)));
    }
    
    is_prime(arr4);

// (e) Return all the palindromes in an array------------------------------------------------------------x

    //Input

    let arr5 = ["racecar","civic","cake","fine","radar","rotor","made"];

    //Anonymous function*******************************
    let palindrome = function(arr){
        let pali = function(str){
        let reverse = str.split("").reverse().join("");
        if(str === reverse)
            return true;
        else
            return false;
        }
    console.log(arr.filter(str => pali(str)));
    }
    
    palindrome(arr5);

    // IIFE********************************************
    (function(arr){
        let pali = function(str){
        let reverse = str.split("").reverse().join("");
        if(str === reverse)
            return true;
        else
            return false;
        }
    console.log(arr.filter(str => pali(str)));
    })(arr5)
    

    // Arrow function*****
    let Palindrome = arr => {
        let pali = str => {
        let reverse = str.split("").reverse().join("");
        if(str === reverse)
            return true;
        else
            return false;
        }
    console.log(arr.filter(str => pali(str)));
    }
    
    Palindrome(arr5);

// (f) Return Median of two sorted arrays---------------------------------------------------x
    //Input

    let ar1 = [ 1, 12, 15, 26, 38 ];
    let ar2 = [ 2, 13, 17, 30, 45 ];

    //Anonymous function*******

    let Median = function(ar1,ar2){
        let n = ar1.length;
        let arr = ar1.concat(ar2);
        arr = arr.sort((a,b) => a-b);
        console.log((arr[n]+arr[n-1])/2);
    }
    
    Median(ar1,ar2);
    
    //IIFE****************

    (function(ar1,ar2){
        let n = ar1.length;
        let arr = ar1.concat(ar2);
        arr = arr.sort((a,b) => a-b);
        console.log((arr[n]+arr[n-1])/2);
    })(ar1,ar2);
    
// (g) Remove duplicates in an array-----------------------------------------------------x

    //Input

    let arr7 = ["app", "bike", 2, "orange", 2, "bike",];

    //Anonymous function*******

    function removeDuplicates(arr) {
        console.log(arr.filter((item, 
            index) => arr.indexOf(item) === index));
    }
      
    removeDuplicates(arr7);

    //IIFE****************

    (function removeDuplicates(arr) {
        console.log(arr.filter((item, 
            index) => arr.indexOf(item) === index));
    })(arr7);


// (h) Rotating an array by K times---------------------------------------------------------x

    //Input
    let arr8 = [1,2,3,4,5,6,7,8];   // Solution : [6,7,8,1,2,3,4,5]
    let k =3;

    //Anonymous Function***************
    let rotate = function (arr,k) {
        arr = arr.reverse();
        console.log(arr)
        let arr_part2 = arr.splice(k).reverse();
        arr = arr.reverse();
        console.log(arr.concat(arr_part2));
        
    } 
    rotate(arr8,k);

    //IIFE*******************

    (function (arr,k) {
        arr = arr.reverse();
        console.log(arr);
        let arr_part2 = arr.splice(k).reverse();
        arr = arr.reverse();
        console.log(arr.concat(arr_part2));
        
    })(arr8,k);
    
    
    //-------------------------------------x-------------------------------------------x-----------------------------------------------------