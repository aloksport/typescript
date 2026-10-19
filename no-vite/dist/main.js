"use strict";
const heading = document.getElementById("heading");
const button = document.getElementById("myButton");
if (!(heading instanceof HTMLHeadingElement)) {
    throw new Error("Heading not found");
}
if (!(button instanceof HTMLButtonElement)) {
    throw new Error("Button not found");
}
button.addEventListener("click", () => {
    heading.textContent = "Hello from TypeScript!!!!";
});
