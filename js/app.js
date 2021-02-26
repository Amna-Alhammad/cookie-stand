'use strict';
const hours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm ', '2 pm' , '3 pm', '4 pm','5 pm','6 pm' ,'7 pm'];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Branch (location , minC ,maxC , avgSale){
    this.location = location;
    this.minC = minC;
this. maxC = maxC;
this.avgSale = avgSale;
this.cookiePerHour = [] ;
this.
this.totalCookie = totalCookie;

}

Branch.prototype.countCookiePerHour=function (){
    let  customers =0;
    for( let i=0 ; i<hours.length ; i++ )
    customers = getRandomNumber (this.maxC,this.maxC)* this.avgSale;
   this.totalCookie  += customers;
    this.cookiePerHour.push (customers);};

    // this.countCookiePerHour();

   Branch.prototype.render = function(){
        
        const container = document.getElementById('sales-data');
        
        console.log(container);
    
        const articalEl = document.createElement('article');
        container.appendChild(articalEl) ;
        const tableEl = document.createElement('table');
        articalEl.appendChild(tableEl);
        const tableRoseEl =document.createElement('tr');
        

    
       
        }

        const seattle = new Branch (
            'seatile',
            23,
            65,
            6.3,
        )


        
 


// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

//  const seattle ={
//  location : 'Seattle',
//  minC :23,
//  maxC :65,
//  avgSale : 6.3 ,
//  cookiePerHour: [],
//  totalCookie : 0 ,
//  countCookiePerHour: function (){
//  debugger;
//  let cookie= 0;
// let random =0 ;
//         for( let i=0 ; i<hours.length ; i++ ){
//      random =getRandomNumber(this.minC,this.maxC);
//          cookie = Math.floor(random * this.avgSale);
//        this.totalCookie  += cookie;
//         this.cookiePerHour.push (cookie);
//         }
//     },
    
// render : function(){
//     debugger;
//     this.countCookiePerHour();
//     const container = document.getElementById('sales-data');
    
//     console.log(container);

//     // const articalEl = document.createElement('article');
//     container.appendChild(articalEl) ;

//     const h2El =document.createElement('h2');
//     articalEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articalEl.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = this.cookiePerHour[i];
//     }

//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total ${ this.totalCookie} cookies`;
// },
//  }

//  const tokyo ={
//     location : 'Tokyo',
//     minC :3,
//     maxC :24,
//     avgSale :1.2  ,
//     cookiePerHour: [],
//     totalCookie : 0 ,
//     countCookiePerHour: function (){
//         debugger;
//         let cookie= 0;
//         let random =0 ;
//         for( let i=0 ; i<hours.length ; i++ ){
//             random =getRandomNumber(this.minC,this.maxC);
//             cookie = Math.floor(random * this.avgSale);
//        this.totalCookie  += cookie;
//         this.cookiePerHour.push (cookie);
//         }
//        },
    
//        render : function(){
//         debugger;
//         this.countCookiePerHour();
//         const container = document.getElementById('sales-data');
        
//         console.log(container);
    
//         // const articalEl = document.createElement('article');
//         container.appendChild(articalEl) ;
    
//         const h2El =document.createElement('h2');
//         articalEl.appendChild(h2El);
//         h2El.textContent = this.location;
    
//         const ulEl = document.createElement('ul');
//         articalEl.appendChild(ulEl);
//         for (let i = 0; i < hours.length; i++) {
//           const liEl = document.createElement('li');
//           ulEl.appendChild(liEl);
//           liEl.textContent = this.cookiePerHour[i];
//         }
    
//         const liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = `Total ${ this.totalCookie} cookies`;
//     },
//     }

    
//  const dubai ={
//     location : 'Dubai',
//     minC :11,
// maxC :38,
//     avgSale : 3.7,
//     cookiePerHour: [],
//     totalCookie : 0 ,
//     countCookiePerHour: function (){
//         debugger;
//         let cookie= 0;
//         let random =0 ;
//         for( let i=0 ; i<hours.length ; i++ ){
//             random =getRandomNumber(this.minC,this.maxC);
//          cookie = Math.floor(random * this.avgSale);
//        this.totalCookie  += cookie;
//         this.cookiePerHour.push (cookie);
//         }
//        },
// render : function(){
// debugger;
// this.countCookiePerHour();
// const container = document.getElementById('sales-data');

// console.log(container);

// // const articalEl = document.createElement('article');
// container.appendChild(articalEl) ;
// const h2El =document.createElement('h2');
// articalEl.appendChild(h2El);
// h2El.textContent = this.location;
// const ulEl = document.createElement('ul');
// articalEl.appendChild(ulEl);
// for (let i = 0; i < hours.length; i++) {
// const liEl = document.createElement('li');
// ulEl.appendChild(liEl);
// liEl.textContent = this.cookiePerHour[i];
// }

// const liEl = document.createElement('li');
//  ulEl.appendChild(liEl);
// liEl.textContent = `Total ${ this.totalCookie} cookies`;
// },
// }

//     const paris ={
//         location : 'Paris',
//         minC :20,
//         maxC :38,
//         avgSale : 2.3,
//         cookiePerHour: [],
//         totalCookie : 0 ,
//         countCookiePerHour: function (){
//             debugger;
//             let cookie= 0;
//             let random =0 ;
//             for( let i=0 ; i<hours.length ; i++ ){
//                 random =getRandomNumber(this.minC,this.maxC);
//                 cookie = Math.floor(random * this.avgSale);
//            this.totalCookie  += cookie;
//             this.cookiePerHour.push (cookie);
//             }
//            },
        
//            render : function(){
//             debugger;
//             this.countCookiePerHour();
//             const container = document.getElementById('sales-data');
            
//             console.log(container);
        
//             // const articalEl = document.createElement('article');
//             container.appendChild(articalEl) ;
        
//             const h2El =document.createElement('h2');
//             articalEl.appendChild(h2El);
//             h2El.textContent = this.location;
        
//             const ulEl = document.createElement('ul');
//             articalEl.appendChild(ulEl);
//             for (let i = 0; i < hours.length; i++) {
//               const liEl = document.createElement('li');
//               ulEl.appendChild(liEl);
//               liEl.textContent = this.cookiePerHour[i];
//             }
        
//             const liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `Total ${ this.totalCookie} cookies`;
//         },
//         }
    
//         const lima ={
//             location : 'Lima',
//             minC :2,
//             maxC :16,
//             avgSale : 4.6,
//             cookiePerHour: [],
//             totalCookie : 0 ,
//                countCookiePerHour: function (){
//         debugger;
//         let cookie= 0;
//         let random =0 ;
//         for( let i=0 ; i<hours.length ; i++ ){
//             random =getRandomNumber(this.minC,this.maxC);
//             cookie = Math.floor(random * this.avgSale);
//        this.totalCookie  += cookie;
//         this.cookiePerHour.push (cookie);
//         }
//                },
            
//                render : function(){
//                 debugger;
//                 this.countCookiePerHour();
//                 const container = document.getElementById('sales-data');
                
//                 console.log(container);
            
//                 // const articalEl = document.createElement('article');
//                 container.appendChild(articalEl) ;
            
//                 const h2El =document.createElement('h2');
//                 articalEl.appendChild(h2El);
//                 h2El.textContent = this.location;
            
//                 const ulEl = document.createElement('ul');
//                 articalEl.appendChild(ulEl);
//                 for (let i = 0; i < hours.length; i++) {
//                   const liEl = document.createElement('li');
//                   ulEl.appendChild(liEl);
//                   liEl.textContent = this.cookiePerHour[i];
//                 }
            
//                 const liEl = document.createElement('li');
//                 ulEl.appendChild(liEl);
//                 liEl.textContent = `Total ${ this.totalCookie} cookies`;
//             },
//             }

//   seattle.render ();
//   tokyo.render ();
//   dubai.render ();
//   paris.render ();
//   lima.render ();
