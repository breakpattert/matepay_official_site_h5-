'use strit';
import 'normalize.css/normalize.css'
import Vue from 'vue'
import app from './index.vue'
import '../../../static/flexible.js'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
