import { createApp } from 'vue'
import App from './App.vue'
import ProductElement from './components/ProductElement'

const app = createApp(App)

// app.component('product-grid', ProductGrid)
app.component('product-element', ProductElement)

app.mount('#app')
