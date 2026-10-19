function calculateTotal(price: number, quantity: number): number {
    const total = price * quantity;
    return total;
}

const price = 250;
const quantity = 3;

const total = calculateTotal(price, quantity);

console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Total:", total);

const resultElement = document.getElementById("result");

if (resultElement) {
    resultElement.textContent = `Total price: ₹${total}`;
}