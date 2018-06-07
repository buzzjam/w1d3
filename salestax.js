var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];


function getSum(x, y) {
  return x + y;
}

function totalSales(salesArray) {
  return salesArray.reduce(getSum);
}

function loopSales(salesArray) {
  for (var i = 0; i < salesArray.length; i++) {
    salesArray[i].totalSales = totalSales(salesArray[i].sales);
  }
  return salesArray
}

function loopTaxes(salesArray, taxObj) {
  for (var i = 0; i < salesArray.length; i++) {
    salesArray[i].totalTaxes = taxObj[salesArray[i].province] * salesArray[i].totalSales;
  }
  return salesArray;
}

function resultOutput(outputArray) {
  var obj = {};
  for (var i = 0; i < outputArray.length; i++) {
    if (obj[outputArray[i].name]) {
      obj[outputArray[i].name] = {
        totalSales: obj[outputArray[i].name].totalSales + outputArray[i].totalSales,
        totalTaxes: obj[outputArray[i].name].totalTaxes + outputArray[i].totalTaxes
      }
    } else {
      obj[outputArray[i].name] = {
        totalSales: outputArray[i].totalSales,
        totalTaxes: outputArray[i].totalTaxes
      }
    }
  }
  return obj;
}




function calculateSalesTax(salesData, taxRates) {
  // calculate total sales per province, per company
  // then multiply it by that province's tax rate
  return resultOutput(loopTaxes(loopSales(salesData), taxRates));

  // then sum canada wide per company, and output that as an object
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log('expected results', results)