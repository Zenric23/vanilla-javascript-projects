console.log('<-----------forEach()------------>')
// forEach
const letters = [1,2,3,400,500];

let asnwer = 0;
letters.forEach((item,index,arr)=>{

  asnwer = item * parseInt(arr) + index; 
});

console.log(asnwer);

console.log('<-----------map()------------>')

// map
const product = [
  {
    name: 'laptop',
    price: 70,
    quantity: 5
  },
  {
    name: 'desktop',
    price: 100,
    quantity: 6
  },
  {
    name: 'keyboard',
    price: 50,
    quantity: 3
  }
];

const totalProductValue = product.map(item => item.name + " " + item.price);
   
console.log(totalProductValue);

console.log('<-----------map() example 2------------>')
// map 2 
const numforMp = [23, 12, 100, 70];

const resultMap = numforMp.map(item=> ({value: item}))
.filter(item=> item.value < 100).sort((a,b)=> a.value-b.value)

console.log(resultMap);

console.log('<-----------map() example 3------------>')
// map 3 

let firstNames = ["wonder", "spider", "ant", "iron"]
let male = "man";
let female = "woman";

let fullNames = firstNames.map(function(firstName, index) {
    return (index == 0) ? firstName + female : firstName + male;
 });

console.log(fullNames);

console.log('<-----------filter()------------>')
// filter
const number = [1,2,3,4,5];

const even = number.filter((value) => {
   return value % 2 === 0;
});

console.log(even);

// [ 2, 4 ]

console.log('<-----------reduce()------------>')
// reduce

const number1 = [1,2,3,4,5];

const sum = number1.reduce((acc, value) => {
  return acc + value;
},10)

console.log(sum);

// 25

console.log('<-----------reduce() example 2 ------------>')

const people = [
  {name: 'kyle', age: 24},
  {name: 'jonny', age: 24},
  {name: 'drake', age: 16},
  {name: 'marvin', age: 15},
]

const result = people.reduce((groupedPeople, person) => {
  const age = person.age

  if(groupedPeople[age] == null){
   groupedPeople[age] = []
  groupedPeople[age].push(person)
  }
 
  return groupedPeople;
  
}, {})

console.log(result);

console.log('<-----------slice()------------>')
// slice
//[start(index), length(end)]
const participants = ['joey', 'liam', 'brown', 'green'];
const winners = participants.slice(1, 3);
console.log(winners);

// [ 'liam', 'brown' ]

console.log('<-----------splice()------------>')
// splice
const number2 = [1,2,3,4,5];
const deleted = number2.splice(3, 0, 5, 67)

console.log(number2);

// [ 1, 2, 3, 5, 67, 4, 5 ]

console.log('<-----------sort()------------>')
// sort

const number3 = [56,12,20,5,15];
// 1. < 0 ... a comes first
// 2. 0 ... nothing change
// 3. > 0 ... b comes first
number3.sort((a,b) => {
  return a - b;
})
console.log(number3);

//[ 5, 12, 15, 20, 56 ]

console.log('<-----------sort() Example 2------------>')

const product1 = [
  {name: 'laptop', price: 700},
  {name: 'desktop', price: 1500},
  {name: 'phone', price: 200}
];

product1.sort((a,b) => {
  return a.price - b.price;
})

console.log(product1);


console.log('<-----------concat()------------>')
// concat
const a = [1,2,3];
const b = [4,5,6];
const c = a.concat(b);
c.push(4);
console.log(c);

//[ 1, 2, 3, 4, 5, 6, 4]

console.log('<-----------fill()------------>')
// fill
const number4 = [1,2,3,4,5];

number4.fill(0, 1, 4);
console.log(number4);

// [ 1, 0, 0, 0, 5]

console.log('<-----------fill() Example 2------------>')

function fillInNumbers(n){
  return Array(n).fill(0).map((_, i) => {
    return i + 1;
  });
}
console.log(fillInNumbers(10))

// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('<-----------includes()------------>')
// includes

const names = ['jane', 'pearl', 'tae'];
const isThere = names.includes('jay');

if(isThere == true){
  console.log('yes sir!')
}
else{
  console.log('sad')
}

// sad

console.log('<-----------join()------------>')
// join

const countries = ['usa', 'canada', 'japan'];
const res = countries.join(' - ');
console.log( 'i want to visit: ' + res);

// i want to visit : usa - canada - japan

console.log('<-----------reverse()------------>')
// reverse

const number5 = [1,2,3,4,5];
number5.reverse();
console.log(number5);

// [ 5, 4, 3, 2, 1 ]

console.log('<-----------from()------------>')
// from

const str = '12345';
const res1 = Array.from(str);
console.log(res1);

// [ '1', '2', '3', '4', '5' ]

console.log('<-----------from() example 2------------>')
// from example 2
// to remove duplicate

const friends = ['jonny', 'dudes', 'dudes', 'hesoyam', 'lime'];

const friendsArray = Array.from(new Set(friends));
console.log(friendsArray);

// [ 'jonny', 'dudes', 'hesoyam', 'lime' ]

console.log('<-----------every()------------>')
// every 

const numbers6 = [12,55,14,90,26];

const resultEvery = numbers6.every((val) => {
  return val > 100
})

console.log(resultEvery);

console.log('<-----------every() example 2------------>')

const persons = [{name: 'Florin'}, {name: 'ivan'}, {name: 'Liam'}, {surname: 'jai'}];

const resP = persons.every((person) => {
  return person.name !== undefined
})
console.log(resP);


console.log('<-----------isArray()------------>')
// isArray

const names45 = ['florin', 'ivan',  'brown'];

console.log(Array.isArray(names));


function stringMani(s){
  let ass = ""
  for(let i = 0; i<s.length; i++){
    let letter = s[i]
    if(letter == letter.toLowerCase()){
      ass+=letter.toUpperCase()
    }else{
      ass+=letter.toLowerCase()
    }
  }
  return ass
}

console.log(stringMani('PotangInaaaMOOO'))
