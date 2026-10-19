
const message = document.getElementById("message");
const button = document.getElementById("changeButton");

if (!(message instanceof HTMLParagraphElement)) {
    throw new Error("Message paragraph was not found");
}

if (!(button instanceof HTMLButtonElement)) {
    throw new Error("Button was not found");
}

let clickCount: number = 0;

button.addEventListener("click", (): void => {
    clickCount++;

    message.textContent =
        `Hello from TypeScript! You clicked ${clickCount} time(s).`;
});
