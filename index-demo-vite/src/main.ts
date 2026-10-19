
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('The #app element was not found');
}

let clickCount: number = 0;

app.innerHTML = `
  <main class="container">
    <h1>TypeScript Debugging Lab</h1>
    <p id="message">Ready to debug!</p>
    <button id="debug-button">Click me</button>
  </main>
`;

const message = document.querySelector<HTMLParagraphElement>('#message');
const button = document.querySelector<HTMLButtonElement>('#debug-button');

if (!message || !button) {
  throw new Error('Required page elements were not found');
}

button.addEventListener('click', () => {
  clickCount++;

  console.log('Button clicked:', clickCount);

  //debugger;

  message.textContent = `You clicked ${clickCount} time(s).`;
});
