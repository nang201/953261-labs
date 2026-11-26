// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder, cheapDrinks } from "./src/cafe.js";

console.log("=== Kad Café menu ===");
menu.forEach((item) => console.log(menuLine(item)));

// Display today's orders
console.log("\n=== Today's orders ===");
// TODO (Part D): print one line per order, e.g.  "A001 Mint — 160 THB"
orders.forEach((order) => {
    const total = orderTotal(order, menu);
    console.log(`${order.id} ${order.customer} — ${total} THB`);
});

// Display summary
console.log("\n=== Summary ===");
// TODO (Part D): print the number of orders, the total sales and the average order.
const totalSales = orders.reduce((sum, order) => {
    return sum + orderTotal(order,menu);
}, 0);

console.log(`Orders: ${orders.length}`);
console.log(`Total sales: ${totalSales} THB`);
console.log(`Average order: ${averageOrder(orders, menu)} THB`);

console.log("\n=== Cheap drinks (under 60 THB) === ");

console.log(cheapDrinks(menu, 60).join("\n"));
// TODO (Part D): print the result of your own function (see the lab sheet).
