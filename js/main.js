'use strict';
const firstRow = ['Location', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm ', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Location Total'];
const hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm ', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

const container = document.getElementById('sales-data');
const artical = document.createElement('article');
container.appendChild(artical);
const mainTable = document.createElement('table');
artical.appendChild(mainTable);
let locationTotal;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createHeadTable() {
  const tableRowHead = document.createElement('tr');
  mainTable.appendChild(tableRowHead);
  for (let x = 0; x < firstRow.length; x++) {
    const tableHead = document.createElement('th');
    tableRowHead.appendChild(tableHead);
    tableHead.textContent = firstRow[x];

  }
}

// ///////////////////////////////////////////////////////////////////////////////////////////////
const myshop = [];

function Shop(location, minC, maxC, avgSale) {
  this.location = location;
  this.minC = minC;
  this.maxC = maxC;
  this.avgSale = avgSale;
  this.dalyTotal = 0;
  this.countPerHour = [];
  this.locationTotal = locationTotal;
  myshop.push(this);
  Shop.prototype.countCookiePreHour = function() {
    let count = 0;
    let random = 0;
    for (let i = 0; i < hours.length; i++) {
      random = getRandomNumber(this.minC, this.maxC);
      count = Math.floor(random * this.avgSale);
      this.locationTotal += count;
      this.countPerHour.push(count);
      this.dalyTotal = this.dalyTotal + this.countPerHour[i];

    }
  };

  Shop.prototype.render = function() {
    const tableRowBody = document.createElement('tr');
    mainTable.appendChild(tableRowBody);
    const tableData = document.createElement('td');
    tableData.textContent = this.location;
    tableRowBody.appendChild(tableData);
    for (let i = 0; i < hours.length; i++) {
      const tableData = document.createElement('td');
      tableRowBody.appendChild(tableData);
      tableData.textContent = this.countPerHour[i];
    }
    const totalData = document.createElement('td');
    tableRowBody.appendChild(totalData);
    totalData.textContent = this.dalyTotal;

  };
}

function createFooterTable() {
  const tableRowFooter = document.createElement('tr');
  mainTable.appendChild(tableRowFooter);
  const tableDataFooter = document.createElement('td');
  tableRowFooter.appendChild(tableDataFooter);
  tableDataFooter.textContent = ('Final Total');
  let innerCount = 0;
  let totOfTot = 0;
  for (let y = 0; y < hours.length; y++) {
    for(let x=0 ; x<myshop.length ;x++){
      innerCount += myshop[x].countPerHour[y];
    }
    const tdFooterTotal = document.createElement('td');
    tableRowFooter.appendChild(tdFooterTotal);
    tdFooterTotal.textContent =innerCount;
  }
  for(let z=0; z<myshop.length ; z++){
    totOfTot +=myshop[z].dalyTotal;
  }
  const tdOfTotal = document.createElement('td');
  tableRowFooter.appendChild(tdOfTotal);
  tdOfTotal.textContent = totOfTot;
}


/////////////////////////////////////////
const form = document.getElementById('cookieform');
form.addEventListener('submit', function(event){
  event.preventDefault();

  const theMinCustomer = event.target.mincus.value;
  const theMaxCustomer = event.target.maxcus.value;
  const averageNum = event.target.avg.value;
  const branchLocation = event.target.location.value;


  const newBranch = new Shop(branchLocation,theMinCustomer , theMaxCustomer ,averageNum);
  mainTable.removeChild(mainTable.lastChild);
  newBranch.render();
  form.reset();

  createFooterTable();
});
///////////////////////////////
const seattle = new Shop('Seattle', 23, 65, 6.3);
const tokyo = new Shop('Tokyo', 3, 24, 1.2);
const dubai = new Shop('Dubai', 11, 38, 3.7);
const paris = new Shop('Paris', 20, 38, 2.3);
const lima = new Shop('Lima', 2, 16, 4.6);
seattle.countCookiePreHour();
tokyo.countCookiePreHour();
dubai.countCookiePreHour();
paris.countCookiePreHour();
lima.countCookiePreHour();
createHeadTable();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
createFooterTable();
