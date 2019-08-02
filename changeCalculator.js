const calculateChange = function(total, cash) {
  let totalChange = {};
  let change = cash - total;
  while (change > 0) {
    if (change >= 2000) {
      totalChange.twentyDollar = ((change - (change % 2000)) / 2000);
      change = (change % 2000);
    } else if (change >= 1000) {
      totalChange.tenDollar = ((change - (change % 1000)) / 1000);
      change = (change % 1000);
    } else if (change >= 500) {
      totalChange.fiveDollar = ((change - (change % 500)) / 500);
      change = (change % 500);
    } else if (change >= 200) {
      totalChange.twoDollar = ((change - (change % 200)) / 200);
      change = (change % 200);
    } else if (change >= 100) {
      totalChange.oneDollar = ((change - (change % 100)) / 100);
      change = (change % 100);
    } else if (change >= 25) {
      totalChange.quarter = ((change - (change % 25)) / 25);
      change = (change % 25);
    } else if (change >= 10) {
      totalChange.dime = ((change - (change % 10)) / 10);
      change = (change % 10);
    } else if (change >= 5) {
      totalChange.nickel = ((change - (change % 5)) / 5);
      change = (change % 5);
    } else if (change >= 1) {
      totalChange.penny = change;
      change = 0;
    }
  } 
  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));