// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Essays from './components/Essays'
import HelloWorld from './components/HelloWorld'


Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: App},
		{path: '/essays', component: HelloWorld}
	]
});

/* eslint-disable no-new */
new Vue({

  el: '#app',
  components: { App },
  template: '<App/>'
})
