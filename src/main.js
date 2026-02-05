import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/base.less'
import router from './router/index.js'
import store from './store/index.js'
import 'vant/lib/toast/style'
import 'vant/lib/dialog/style'

const app = createApp(App)
app.use(router).use(store)
app.mount('#app')