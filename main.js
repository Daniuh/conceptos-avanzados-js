import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentComponent } from './src/concepts/enviroments';
import { callbacksComponent } from './src/concepts/callbacks';
import { promises } from './src/concepts/promises';
import { promiseRace } from './src/concepts/promise-race';
import { asyncComponent } from './src/concepts/async';
import { asyncAwaitComponent } from './src/concepts/async-await';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector('.card');

//enviromentComponent(element);
//callbacksComponent(element);
//promises(element);
//promiseRace(element);
//asyncComponent(element);
asyncAwaitComponent(element);