/*Ask user to input a price*/
let price = prompt("Enfer the price :");
/*Remove the dollar sign (converts to string)*/
let priceN = parseInt(price.slice(1));
/*Calculate the discount 10% */
let discount = priceN * 0.9;
/*Display the discounted price */
console.log("The discounted price is : $" + discount);
