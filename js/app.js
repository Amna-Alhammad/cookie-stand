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