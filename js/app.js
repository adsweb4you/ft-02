// ==  შედარების ოპერატორი რომელიც მონაცემის მნიშვნელობებს ადარებს 
// === შედარების ოპერატორი რომელიც მონაცემის მნიშვნელობას და ტიპს  ადარებს 
// >   შედარების ოპერატორი მეტობა
// <   შედარების ოპერატორი ნაკლებობა
// >=  შედარების ოპერატორი მეტია ან ტოლია
// <=  შედარების ოპერატორი მეტია ან ტოლია
// ! შებრუნების ოპერატორი
// ++ მნიშვნელობის გაზრდა 1
// -- მნიშვნელობის დაპატარავება  1
// += საკუთარ თავზე მოქმედება საკუთარი მნიშვნელობით
// % მოდულური ოპერატორი აბრუნებს ნაშთს
// &&  'და' ოპერატორი
// ||  'ან' ოპერატორი


let sum = 20;
let delyprice = 20;
let pass = 123;
 
 
 
if(sum  >= 100 &&  pass == 123){
 document.getElementById('ou').innerHTML = 'უფასო მიწოდება';
}else{
    document.getElementById('ou').innerHTML = `მიტანის ღირებულება არის ${delyprice}₾`;
}

if(1 > 4){
    console.log('ok');
}else if(5 > 8) {
    console.log('ok 1');
}else if(10 == 11){
    console.log('ok 2');
}else{
    console.log('ok 3');
}


function checkNaumber(str){
    let find = str.match(/[0-9]/);
  if (find != null) {
    return true;
  }

  return false;
}
 if (checkNaumber('საჯკდფჰდჯსა23')) {
    console.log('ნაპოვნია რიცხვი');
 }
 
let array = [ 5, 'სტუდენტი2', 23, 'სტრინგი', 'ლექტორი', 55 ];

// array.push('დამკვირვებელი'); // მასივში ახალი ელემენტის ჩამატება (ბოლოს)
// array.unshift('კურატორი'); // მასივში ახალი ელემენტის ჩამატება (თავში)
// array.pop();  // მასივში ახალი ელემენტის წაშლა (ბოლოს)
// array.shift();  // მასივში ახალი ელემენტის წაშლა (თავში)
// array.slice(2, -2) // მასივის ელემენტების წაშლა
// array.splice(2, 2) // მასივის ელემენტების წაშლა
//  array.splice(0, 0, 'ახალი ელემენტი', 'კიდევ ერთი ელემენტი'); // მასივის ელემენტების წაშლა/ჩამატება
//  array.length ითვლის მასივში ელემენტების რაოდენობას
let fn = array.includes('ლექტორი'); // ამოწმებს არსებობს თუ არა მასივში რაიმე ელემენტი

// გამეორების მეთოდები

// ამოწმებს მასივში ელემენტს თუ იპოვა 1 მაინც აბრუნებს boolean 
let finds = array.some( function(element){
  return  element == 'სტუდენტი';
});

// ამოწმებს მასივში ელემენტებს თუ ყველა წევრი აკმაყოფილებს პირობას აბრუნებს boolean 
let findall = array.every( function(element){
    return  element.length >= 1;
 });

 // ეძებს  მასივში ელემენტებს თუ იპოვა  აბრუნებს პირველივე წევრს
let findel = array.find( function(element){
    return  typeof element == 'string';
 });

  // ეძებს  მასივში ელემენტებს თუ იპოვა  აბრუნებს პირველივე წევრს
let finall = array.filter( function(element){
    return  typeof element == 'string';
 });

//  ბეჭდავს მასივის ყველა ელემენტს
 let app = document.getElementById('arr');
  array.forEach( function(el){
      app.innerHTML  += `<h1> ${el} </h1>`;
   } )

 //  ბეჭდავს მასივის ყველა ელემენტს და ქმნის ახალ მასივს
 let newarr =   array.map( function(el){
     let leng;

     if (typeof el == 'string') {
        leng = el.length;
     } else {
        leng = ''
     }

     return `${el} შედგება ${leng} სიმბოლოსგან` 
 } )

let Users  = ['ედიტორი', 'ადმინ', 'მოდერატორი', ['ბლოკის უფროსი', 'ჰაი ლეველის ოპერატორი'] ];
let Numbers  = [2, 150, 9098, 100000,34,55,7,67];

// Users.sort();// მასივის სორტირება ა-ჰ
Users.sort().reverse() // მასივის სორტირება ჰ-ა
// რიცხვების სორტირება
Numbers.sort( function(a,b){
  return a - b;
} );

//let united = Users.concat(Numbers); // მასივების გაერთიანება
let united =[...Users , ...Numbers]; // მასივების გაერთიანება
 console.log(Users[3][0]);


let outs = document.getElementById('finded');
 function findsmy(value) {
    outs.innerHTML = '';
 let data = [
    'შაკო',
    'ზურა',
    'ოთო',
    'გიგი',
    'ზურა',
    'ლექსო'
 ] 

 let finds1 = data.filter(function (el){
    return el.search(value) != -1;
 })

 if (finds1.length == 0) {
    outs.innerHTML = 'მონაცემები ვერ მოიძებნა'
 } else {
     finds1.forEach(function(element){
    outs.innerHTML += `<h1> ${element} </h1>`;
 })
 }

 }


 let arrleng = [
   "front-end",
   'ui/ux',
   'devops'
 ]

  arrleng =  arrleng.map(function(el){
    return el.replace('front-end', 'back-end');
 })

//   arrleng.forEach(function(el){
//      if (el.length > 8) {
//        document.getElementById('ss').innerHTML = `<h1>${el}</h1>`
//      } else {
//       document.getElementById('ss').innerHTML = `<p>${el}</p>`
//      }
// })

 console.log(arrleng);


 let x1  = '5';
 let x2 = '8';

 function sums (){
   return  Number(x1) +  Number(x2);
 }


 sums();

 let Testuser = [
   'ana',
   'ზურა',
   'merabi',
   undefined,
   5,
   'test'
 ];

 

 for (let s =  Testuser.length - 1; s >  -1; s--) {
 
    

   let elem = Testuser[s]
   // if (elem == undefined) {
   //    break;
   // }

 
 }
 

//  for (x of Testuser){
//     console.log(x);
//  }

//  for (x in Testuser){
//    console.log(x);
// }

// let myx = 0;
// while(myx < 25 ){
//    //
//    console.log(myx);
//    myx++;
// }

let myy = 0;

do {
   console.log(myy);
   myy++;
} while (myy < 25);

let Myusers = {
   name:'ადმინ',
   password:'123123',
   avatar:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
   email:'admin@gmail.com',
   phone:58787745,
   nickname:{
   nick1:'ტესტ',
   nick2:'ტესტ1',
   },
   adress:[
      'ქ.გორი მისამართი1',
      'ქ.გორი მისამართი1',
      'ქ.გორი მისამართი1',
      'ქ.გორი მისამართი1'
   ],
   retavatar:function(arg){
      return this.avatar + arg
   }
}

delete Myusers.name 

let getname = 'phone'

let Prod = [
   {
      name:'ვაშლი',
      price:250.25,
      proc:100,
      img:'https://planta.ge/storage/uploads/XeTK9oWHIRMDoCWvpsO7ZHz606Eru23LZ6PBVPxs.jpeg',
   },

   {
      name:'ვაშლი',
      price:370.25,
      proc:100,
      img:'https://planta.ge/storage/uploads/XeTK9oWHIRMDoCWvpsO7ZHz606Eru23LZ6PBVPxs.jpeg',
   },

   {
      name:'ვაშლი',
      price:330.25,
      proc:99,
      img:'https://planta.ge/storage/uploads/XeTK9oWHIRMDoCWvpsO7ZHz606Eru23LZ6PBVPxs.jpeg',
   },
]

// Prod = Prod.filter(el =>{
//    return el.price   <  300;
// })


Prod.forEach(el=>{

   let info;

   if (el.proc == 100) {
      info = `<span> წარმატებული </span>`
   } else {
      info = ''
   }
   
   let card = `
   <div class="col-lg-4">
   <div class="card"  >
   ${info}
  <img src="${el.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${el.name}</h5>
    <p class="card-text">${el.price} ₾</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
  </div>
</div>
   `

   apple.innerHTML += card
   
});



// let div = document.querySelector('.testdiv');

// let div = document.getElementsByClassName('testdiv');
// let div = document.getElementsByTagName('div');
// let div = document.querySelectorAll('input[type="text"]');

let div = document.getElementById('testdiv');
let button = document.getElementById('But');

// button.onclick = changeDiv;
// button.onclick = changeDiv2;

button.addEventListener('click', changeDiv);


function changeDiv(){


   // div.style.backgroundColor = 'red';
   // div.style.color = 'white';


   // div.className = div.className + " " + 'newClass';

   // div.setAttribute('style', 'background-color:red');
   // div.getAttribute('style')
   // let hasAttr = div.hasAttribute('value');

   // div.removeAttribute('class');

   let text = '<p> ახალი ტექსტი </p>';

   // div.innerText = text;
   div.innerHTML = text

   let active = div.getAttribute('data-active')

   // if(active == 0){
   //    div.setAttribute('data-active', '1')
   // }else{
   //    div.setAttribute('data-active', '0')
   // }
   





   console.log(hasAttr);
}





