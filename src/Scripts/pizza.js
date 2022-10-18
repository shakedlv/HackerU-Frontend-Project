/**
 * Calculate cost of givn pizza 
 * @param {pizza} pizza The given pizza from order 
 * @returns {number} Value of the given pizza
 */
export const calculatePizzaPrice = (pizza) =>{
    var toppingCost = pizza.toppings.length * 2.50;
    var sizeCost = pizza.size === "Large" ? 7.00 : pizza.size === "Medium" ? 5.00  : 3.00;
    return toppingCost + sizeCost;
}

// This is the list of all available toppings 
export const toppings = ["Olives","Pepperoni" , "Tomato" ,"Pepper", "Mushrooms","Onions"]

/**
 * Calculate total cost of each pizza in the order 
 * @param {order} order Given order - list of pizzas the user created
 * @returns {number} Value of the all pizzas in given order
 */

export const totalCost = (order)=>{
    var cost = 0;
    for (let index = 0; index < order.length; index++) {
        const pay = calculatePizzaPrice(order[index]);
        cost += pay;
    }
    return cost;
}