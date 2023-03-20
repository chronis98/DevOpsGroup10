import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faUsers, faPlus, faPen, faTrash, faFloppyDisk, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faUsers, faPlus, faPen, faTrash, faFloppyDisk, faChevronLeft)


import './assets/main.css'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')