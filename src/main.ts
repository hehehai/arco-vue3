import { createHead } from '@vueuse/head'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

const head = createHead() // <--
app.use(head)

Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.({ app }))

app.mount('#app')
