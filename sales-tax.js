var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sum(numbers) {
  let total = 0;
  numbers.forEach(n => total += n);
  return total;
};

function calculateTax(total, rate) {
  return total * rate
}

function getTaxRate(taxRates, province) {
  return taxRates[province];
}

function calculateSalesTax(salesData, taxRates) {
  const salesSummary = {}

  for (const company of salesData) {
    const taxRate = getTaxRate(taxRates, company.province);
    const currentSales = sum(company.sales);
    const currentTax = calculateTax(currentSales, taxRate);

    let obj = {
      totalSales: currentSales,
      totalTaxes: currentTax,
    }
    if (salesSummary[company.name]) {
      salesSummary[company.name]['totalSales'] += currentSales;
      salesSummary[company.name]['totalTaxes'] += currentTax;
    } else {
      salesSummary[company.name] = obj;
    }

  }
  return salesSummary
};

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(results);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/