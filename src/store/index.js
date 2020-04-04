import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret, faTrash)

// load Vuex
Vue.use(Vuex);

Vue.component('font-awesome-icon', FontAwesomeIcon)

// create store
export default new Vuex.Store({
    modules :{
        todos
    }
});