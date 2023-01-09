var isBirthDayData = true;
var ageData = 40;
var userNameData = 'John';
var createError = function (msg) {
    throw new Error(msg);
};
var logBrtMsg = function (isBirthDay, userName, age) {
    if (isBirthDay) {
        return " Congrats ".concat(userName.toUpperCase(), ", age: ").concat(age + 1);
    }
    else if (isBirthDay === false) {
        return 'too bad';
    }
    return createError('error');
};
logBrtMsg(isBirthDayData, userNameData, ageData);
var smth = 10;



class Thermostat{
    contructor(degree){
      this.degree = degree
    }
  
    set temperature(updateDegree){
      this.degree =  (updateDegree * 9.0) / 5 + 32;
    }
  
    get temperature(){
        this.degree * 9.0 / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
 // 26 in Celsius
  console.log(temp);







function frame(elem){

}


let a ='51'
let c = +a;
console.log(c);



function powersOfTwo(n){
  let a= []
  for( let i = 0 ; i<=n ; i++ ){
    a.push(2**i)
  }
  return a;
}

console.log(powersOfTwo(0)); 



function getSum( a,b )
{
   if(a!=b){
     let sum = 0;
     for(let i = a ; b> a? i<=b : i>=b; b>a? i++ : i--){
       sum+=i
     }
     return sum
   }
  else{
    return a
  }
}

console.log( getSum(4,-10));




function rowSumOddNumbers(n) {
  let a =0;
  if (n ==1){
    a = 1
  }
  else{
    a += rowSumOddNumbers(n - 1)+ 2*n - 2
  }
  return a
}
console.log(rowSumOddNumbers(3));


let prise = [100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];
let correct =['A','B','B','D','B','C','A','A','B','D','D','D','B','C','B'];
let player = ['231A'];

function getTotalCashPrize(prizeFund, correctAnswers, playerActions) {
   let correct =0
   let life = 0
   for(let i = 0; i<playerActions.length;i++){
    if(correctAnswers[i]==playerActions[i]){
      correct+=prizeFund[i];
    }
    else if (playerActions[i].indexOf(1) != -1 || playerActions[i].indexOf(2) != -1||playerActions[i].indexOf(3) != -1){
        if(playerActions[i] == correctAnswers[i]){
        correct +=prizeFund[i]
        life ++}
    else {
      life ++
    }
   }
  let arr = [correct,life]
  return arr;
}}


console.log(getTotalCashPrize(prise,correct,player));





function DNAtoRNA(dna) {
  return dna.replaceAll ('T' ,'U')
}


console.log(DNAtoRNA("AAACGACATATTCCCAG"));




function getMiddle(s){
 if(s.length % 2 == 0) {
  return ''+s[s.length / 2 -1]+s[s.length / 2]
 }
 else{
  return s[s.length / 2-0.5]
 }
}


console.log(getMiddle('Dolleryzrwefwefwef'));




function positiveSum(arr) {
  let sum = 0
  arr.forEach((value) => {
    if (value > 0){
      sum +=value;
    }
  })
  return sum
}

console.log(positiveSum([1,-4,7,12])); 




function solution(str, ending){
   let sliced = str.slice(str.length-ending.length,str.length)
    if(sliced == ending ){
      return true
    }
    else{
      return false
    }
   
}

console.log(solution('hello','hello'));



function removeSmallest(numbers) {
  
   let newArr = [...numbers];
   let min = Math.min.apply(null,newArr);
   let a = newArr.indexOf(min);
   newArr.splice(a,1)
   return newArr
}



console.log(removeSmallest([5,3,2,1,4,1]));



function feast(beast, dish) {
   if(beast[0]==dish[0] && beast[beast.length-1]==dish[dish.length-1]){
    return true
   }
   else{
    return false
   }
}


console.log(feast('bear', 'bre'));



String.prototype.toJadenCase = function () {
  let arr = this.split(' ');
    let mapped =arr.map(elem=>{
    return elem.slice(0,1).toUpperCase()+ elem.slice(1)
  })
  
  return mapped.join(' ')
};

let str="How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());




function longest(s1, s2) {
  let str ='';
  for(let i = 0; i <=s1.length -1;i++){
    if(str.indexOf(s1[i]) == -1){
      str+=s1[i]
    }
  }
  for(let j = 0; j <=s2.length -1;j++){
    if(str.indexOf(s2[j]) == -1){
      str+=s2[j]
    }
  }
  return str.split('').sort().join('')
}


let a2 = "xyaabbbccccdefww";
let b2 = "xxxxyyyyabklmopq"
console.log(longest(a2, b2));




function minMax(arr){
  let min = Math.min.apply(null,arr);
  let max = Math.max.apply(null,arr)
  
  return [min,max]
}

console.log(minMax([3,4,5,6]));


var min = function(list){
    
  return `min =${Math.min.apply(null,list)} , max =${Math.max.apply(null,list)}`
}

var max = function(list){
  
  return ` max =${Math.max.apply(null,list)} ,min = ${Math.min.apply(null,list)} `
}

console.log(max([12,-34,2,5,2,1,2]));



var countSheep = function (num){
  let str = '';
  if(num <= 0){
    return str
  }
  else{
    for(let i =1 ; i <= num;i++){
      str+=`${i} sheep...`
    }
    return str
  }
 
}
console.log(countSheep(12));


function isPangram(string){
  let alfabet = "abcdefghijklmnopqrstuvwxyz"
  let arr =string.toLowerCase().split('') ;
  let j = '';
 let a =arr.sort()

  let b = new Set(a)
  b.forEach((elem)=>{
    j+=elem;
  })
  let c = j.slice(j.length-26)
  return c == alfabet
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));





function friend(friends){
  let myfr=friends.filter((elem)=>{
    return elem.length ==4
    
  })
  return myfr
}

console.log(friend( ["Ryan", "Kieran", "Mark"]));




function oddOrEven(array) {
  let j =0;
 array.forEach((elem) => {
   j+=elem;
 })
 return j % 2 ? 'odd' : 'even'
}



function tribonacci(signature,n){
  if(n==0){
    return []
  }
  else{ let firstNum = signature[0];
    let secondNum = signature[1];
    let thirdNum = signature[2];
    let res = firstNum+secondNum+thirdNum;
    let arr =[firstNum,secondNum,thirdNum,res];
    for(let i = 5; i<=n; i++){
      firstNum=secondNum;
      secondNum=thirdNum;
      thirdNum = res;
      res = firstNum+secondNum+thirdNum;
      arr.push(res)
    }
    arr.length = n;
    return arr
  }
 
}

console.log(tribonacci([1, 1, 1],4));




function printerError(s) {
  let h =s.toLowerCase()
  let fine = "abcdefghijklm"
  let count = 0
  for(let i = 0; i<s.length-1;i++){
    if(fine.indexOf(h[i]) == -1){
      count++
    }
  }
  return `${count}/${s.length}`
}
console.log(printerError("aAAaxbbbbyyhwawiwjjjwwm"));




function sum (numbers) {
  "use strict";
  let sum = 0;
  numbers.forEach((e)=>{
     sum+=e;
  })
  return sum
};
console.log(sum([]));



function skiJump(mountain){
  let road = ((mountain.length * mountain.length *1.5*9) / 10).toFixed(2);
  if(road  < 10){
    return `${road} metres: He's crap!`
  }
 else if(road  >= 10 && road  < 25){
    return `${road} metres: He's ok!`
  }
 else if(road  >= 25 && road  < 50){
    return `${road} metres: He's flying!`
  }
  else{
    return `${road} metres: Gold!!`
  }
}

console.log(skiJump(['*****', '******', '*******', '********','ergergerg']));



let a3 = [1];
console.log( Boolean(a3[0]));



function reverseWords(str) {
  let arr = str.split(' ');
    let maped = arr.map((el)=>{
     return el.split('').reverse().join('')
    })
  return maped.join(' ');
}
console.log(reverseWords('My younger sister'));




function number(busStops) {
  let sum= 0 ;
  for(let i = 0; i<=busStops.length-1;i++){
      sum += +busStops[i][0];
      sum -= +busStops[i][1];

  }
  return sum;
}
console.log(number([[10,0],[3,5],[5,8]]));



export let sum =(a,b)=>{
return a+b
}
console.log(sum (1,2));