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