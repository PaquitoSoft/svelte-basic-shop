import './app.css'
import App from './App.svelte'
import EntryPoint from './entry-point.svelte';

// const app = new App({
//   target: document.getElementById('app')
// });
const app = new EntryPoint({
  target: document.getElementById('app')
});

export default app
