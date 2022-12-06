//1)Create a function which returns the number of apples, mangoes present in an array.
// function  no(apples,mangoes){
//     let array =[apples,mangoes]
//     return array;
// }
// console.log(no(2,5));
//or
// function no(){
//     let array =[apples=13,mangoes=23]
//     return "the no. of apples and mangoes present in an array is   "+array;
// }
// console.log(no())
//or
// function num(){
// let array =[apples=10,mangoes=13]
// let total = apples+mangoes;
// console.log( "the no. of apples is  " +apples+  "  and mangoes is  "   +mangoes )
// return "the total is   " +total;
// }
// console.log(num())

//2)Create a function that will return an integer number corresponding to the amount of digits 
//in the given integer
// function find(a,b)
// {
//     let no1=a.length;
// let no2=b.length;
// console.log(no1,no2)
// return "the integer we got for the given number is: "
// }
// console.log(find("123","34"))
//or


// function count_digits(n)
// {
//     let num= n.toString();
//     console.log(num.length);
// }
// let n =34556642;
// console.log(count_digits(n));





//3)In Ludo game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided 
//dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
//Can you reach your friend's tile number in the next roll? Create a function that takes your position
//a and your friend's position b and returns a boolean representation of whether it's possible to earn 
//a bonus on any dice roll.


                     
// function game(a,b){    //(1,2)              (2,3)       (3,31)        (the no. which r given r checked
//    var n = b-a;         //n=2-1  n=1        n=3-2,n=1   n=31-3 n=28     if the no.<or=6 then it return 
//     if(n<=6){             //1<6             1<6          28<=6          true otherwise it return false)
//       return true         //true            true
//     }
//     else{
//         return false;                                   // false
//     }
// }
// console.log(game(5,9))
// console.log(game(3,35))




//practice sums


//1) Create a function to find cubic root of a number



// function  sqrt (){
//     let x = Math.cbrt(760)
//     return (x)
// }
// console.log(sqrt());
//2) Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// add_ly = add_suffix("ly")
// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"
// add_less = add_suffix("less")
// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"
//3)A Number Sequence is generated from a pattern of dots that form a triangle. 
//The first 5 numbers of the sequence, or dots, are:1, 3, 6, 10, 15Discover the pattern logic
//4) Sam wanted to deposit an amount of 10,000 INR . help her with all the possible denominations, 
//she can fill the deposit form
// Sai T12:30 PM
// 10,20,50,100,500,2000
// 10*20,20*40, 50*20+ 100*10 +500*6+ 2000*2 
// let a=10;
// let f=20;
// let e=50;
// let b=100;
// let c=500;
// let d=2000;
// let sum = a*20+20*40+100*10+50*20+500*6+2000*2
// console.log(sum) 
// let a=10,b,20,c=50,d=100,e=500,f=1000,g=2000
// if(a<=0)
// Write a program to find digits in a given number

// function sum(ele)
//  add=0
// for(i=0;i<ele.length;i++)
// if(ele[i]>5)
// add=add+ele[i]
// return add
// console.log(sum([1,2,3,4]))
// console.log(sum([1,2,30,40]))
// console.log(sum([10,20,30,40]))
// function spaceMeOut(str) {
// 	return str.split('').join(' ')
// }
// console.log(spaceMeOut("keerthi"))
// console.log(spaceMeOut("keerthana"))
// console.log(spaceMeOut("aashi"))
// console.log(spaceMeOut("keerthi sample"))
function multiSum(num){
    var sum=0;
    for(var i=1;i<=10;i++){
        sum+=num*i;
    }
    return sum;
}
console.log(multiSum(6))