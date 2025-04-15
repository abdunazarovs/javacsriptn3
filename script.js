// // 

// // ozgaruvchilar->xotiradan malum bir joyni saqlash uchun ishlatiladi 
// // console.log -> natija va xatolikni chiqaradi

// // c tili int,float,char 
// // 4 xil bular avtomatik ,ikkinchisi var,3-si let,4-si const
// // avtomatik
// a=5;  // mashnaqa numberlarga 
// console.log(a);


// // var

// // ozgaruvchini qiymati ozgarsa
// var b=10; // var ism='toshmat'
// var b=15;// var ism='muhammad ibn vahhob'
// console.log(b);

// // var ham kechik ozgaruvchini qiymatini o'zgartirish mumkin    


// // let ham ozgaruvchini bir turi
// let c=20;
// c=25;

// console.log(c);

// // u let degan ozgaruvchini nomini olsagina ishlaydi

// // const esa ozgarmas
// const d=30;
// //
// // d=35; // bu xato
// console.log(d);


// let l=5;
// let m=5.6
// console.log(l,m);
// let h=9007199254740991;
// console.log(typeof(h));
// // bigint bu katta sonlar
// // typeof- buni turi yanikim
// // string-> bu matn 
// let jr='abdurasul'   // ' '-shu " "-> tekst turini kiritishda foydalanalida
// console.log(jr)
// console.log(typeof(jr));

// //null i undefined 
// // undefined -> berilmagan topilmagan 
// let k;
// console.log(k)
// boolen
// true yoki false 
// > < == || &&
// let a=4;
// let b=3;
// if(a>b)
// {
//     console.log("true");
// }
// // object
// // object doim konstant bilan ishlaydi,person -> obyekt nomi
// const person={
//     name:'ozodbek', // name,age kabi turdosh obyektlarda boladiganlari hossa ,ularni toldiradigan malumot bolsa qiymat buladi
//     age:'17', // hossa-> property, qiymat-> value
//     isMarried:false,
//     hobbies:['sport','music'],
//     address:{
//         city:'xujaabad',
//         street:'nargis'
//     }
// }
// // const azizbek={name:'azizbek',age:16}
// console.log(person)

// const Car={
//     name:'BMW',
//     age:'2023',
//     price:'200000 $',
//     color:'gray',
//     spentMile:'12000km',
// }
// console.log(Car.color)


//alert 
// let tvt=alert("18 or get away" );
// // alert vazifasi ogohlantirish 

// let tkt=confirm("are you 18");
// console.log(typeof(tkt))


// let v=45;
// let txt=+prompt("sonni kiriting")
// console.log(typeof(txt));
// let sum=v+txt;
// console.log(sum)

// 3+4=7 "3"+"4"=34 "kuz"+"bahor"=>kuzbahor

//if else agar uchun 
// agar choy ichmasam,och qolaman 
// romb 
let age=17;
if(age>18)
{
    console.log("prava ololas oka")
}
else
{
    console.log("prava ololmaysan")
}