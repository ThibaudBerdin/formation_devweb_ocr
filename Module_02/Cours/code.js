const findElement = (array, thingToFind) => {
    for (let element of array) {
 if (element === thingToFind) {
 return true;
 }
 }
 
 return false;
 }

 const myArray = ["thihabud", "Yvon", "Zlana"];

 const result = findElement(myArray, "Yvon");
 console.log(result);


 function recur(n) {
    if(n > 1) {
        return n * (recur(n-1));
    }
    else {
        return 1;
    }
 }


 console.log(recur(6));

 let moyennes = [10,23,1,23,4343,23,23,45,451,587,455];

 let moyennes2 = [10,10];

 const totalArray = moyennes.reduce((accumulator , value) => {
    return accumulator + value;
 },0);

 console.log(totalArray);


 function calculeMoyenne(moyenne) {
    let total = 0;
    for(let m of moyenne ) {
    total += m;
    }
    return total / moyenne.length;
}

console.log(calculeMoyenne(moyennes));
console.log(calculeMoyenne(moyennes2));