const userData = {
    isBirthDayData: true,
    ageData: 40,
     userNameData: 'John',
     messages :{
        error:'error'
     }
}


let userDataTuple:[boolean,number,...string[]] = [true, 40, 'john','erferf','erferf'];

let message : string | number = 5;
let messagess : string[]|number[] = [23]

function printMsg(msg:string[] | number | boolean):void{

    if( Array.isArray(msg)){
        msg.forEach(m=>{
            console.log(m);
            
        })
    }
    else if(typeof(msg)=='number'){
        console.log(msg.toFixed());
    }
 
}

const printReadings =(a:number[] | string)=>{
   console.log(a.slice(0,3));
   
}



let checkReadings =(readings : {system:number} | {user : number}):void=>{
    if('system' in readings){
        console.log(readings.system);
    }
    else {
        console.log(readings.user);
    }
}


let logValue =(x:string | Date)=>{
     if(x instanceof Date){
        console.log(x.getDate);
        
     }

     else{
        console.log(x.trim());
        
     }
}
logValue('s___dgsFFVC35235dg')




let msg : 'Hello' ="Hello";

let port3000:number = 3000;
let port3001:number = 3001;

let startServer =(protocol:'http' | 'https', port : 3000 | 3001): 'Server started'=>{
  return "Server started"
}

startServer('https', 3000)
 

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';

type idName = string | number
let createAnimation =(id:idName ,
                     animationName:string,
                     timingFunc : AnimationTimingFunc = 'ease' ,
                     duration : number, 
                     iterCount : 'infinite' | number ):void=>{
   // const elem = document.querySelector(`#${id}`) as HTMLElement;

   // if(elem){
       console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`);
       
   // }
    
}

createAnimation(3,'type', 'ease-out', 4,6);






let createError=(msg:string)=>{
   throw new Error(msg);

   
}

const logBrtMsg=({isBirthDayData,ageData,userNameData,messages:{error}}:{
    isBirthDayData: boolean,
    ageData: number,
    userNameData:string,
    messages : {error:string}
    })
    : string => {
    if(isBirthDayData){
        return` Congrats ${userNameData.toUpperCase()}, age: ${ageData+1}`;
    }
    else {return createError('error')}
    }


console.log(logBrtMsg(userData));



const departmens: string[] =['dev','design','marketing']

let a =departmens.map(d=> d.toUpperCase());
console.log(a);

let b = 'asf'
let c = b.split('')
console.log(c);




interface Styles {
    [keys:string] : string
}

const styles: Styles ={
   position :'absolute',
   align: 'wefwef'
}


let TOP ='Top'
let RIGHT = 'Right';

enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM
}

enum TimingFunc {
   EASE=1,
   EASE_IN=EASE+1,
   LINEAR=14
}


function frame(elem:string , dir: Directions , tFunc: TimingFunc):void{
   if(dir === Directions.RIGHT){
        console.log(tFunc)
   }
}

frame('id', Directions.RIGHT,TimingFunc.EASE_IN)



let fetchData = (url:string, method : 'GET'| 'POST'):void=>{
    console.log(method);
    
}

const reqOptions ={
    url: "https://someurl.com",
    method : 'GET'
} ;

const str = 'str';
const method ="GET"

fetchData('qqq','GET');
//fetchData(reqOptions.url, reqOptions.method as 'GET');


fetchData(reqOptions.url, <'GET'>reqOptions.method);



let box = document.querySelector('.box') as HTMLElement
box.textContent ='erferfe'


interface Square{
    side:number,
    area: number
}


interface Rect{
    a:number,
    b:number,
    area: number
}

function calcArea(side:number):Square;
function calcArea(a:number, b:number):Rect;
function calcArea(a:number ,b?:number):Square | Rect {
     if(b){
        const rect:Rect ={
            a,b,
            area:a*b
        }

        return rect;
     }
     else{
        const square:Square ={
            side:a,
            area:a**2
        }

        return square;
     }
}
calcArea(3,4)
calcArea(1,7)
calcArea(3)



type Smth<T> =T;

const num:Smth<number> = 5

interface ParentsOfUser {
    mother : string ;
    father : string
}

interface User<ParentsData extends ParentsOfUser>{
    login : string,
    age : number,
    parents : ParentsData | string
}



const user: User<{mother:string,father : string,married : boolean}> = {
    login : 'srt',
    age:54,
    parents : {
        mother:'anna',
        father : 'ted',
        married : true
    }
};

const user2: User<{mother:string,father : string,married : boolean}> = {
    login : 'srt',
    age:54,
    parents : "ergerg"
};



type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type |Type[];

const data: OneOrMany<number[]>=[5]



const depositeMoney =<T extends number|string>(money :T):T=>{
  console.log(`req to server with amount : ${money}`);
  return money
}


console.log(depositeMoney('700'));



export function dontGiveMeFive(start:number, end:number) : number{
   let arr:number =0
   for(let i:number = start; i <= end;i++ ){
       if(String(i).indexOf('5') == -1){
        arr++
       }
   }
  return arr;
}

console.log(dontGiveMeFive(1, 49));



export function countBits(n: number): number {
     let th2:string =n.toString(2);
     console.log(th2);
     
     let res:number | string = 0;
     for(let i:number = 0 ; i<=th2.length-1;i++){
            res += +th2[i];
     }
     return res
}

console.log(countBits(8878833958238369));



export function number(busStops: [number, number][]): number {
    let sum:number = 0 ;
    for(let i = 0; i<=busStops.length-1;i++){
        sum += +busStops[i][0];
        sum -= +busStops[i][1];

    }
    return sum;
  }
console.log(number([[10,0],[3,5],[5,8]]));



export function sumDigits(n: number): number {
  let num:number = Math.abs(n)
  let str = String(num);
  let res = 0
  for(let i = 0;i<= str.length-1;i++){
    res += +str[i]
  }
  return res
}
console.log(sumDigits(-43));



export function descendingOrder(n: number) {
  let res:any = String(n).split('');
  for (let index = 0; index < res.length; index++) {
    res[index]= Number( res[index])
  }
    let res2 = res.sort((a:number,b:number)=>{
        return b-a
    }).join('')/1
    return res2
}
console.log(descendingOrder(123));
