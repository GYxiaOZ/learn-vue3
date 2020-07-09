// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'

// createApp(App).mount('#app')
import { createApp } from "./runtime-canvas";
import App from "./App";
import { getCanvasRootContainer } from "./Game";

createApp(App).mount(getCanvasRootContainer());
