import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import '@/assets/css/tailwind.css';
import { addIcons } from 'ionicons';
import items from '@/data.json';
import menus from '@/menus.json';
import {
	menu,
	home,
	close,
	grid,
	list,
	image,
	images,
	albums,
} from 'ionicons/icons';
addIcons({
	'ios-menu': menu.ios,
	'md-menu': menu.md,
	'ios-home': home.ios,
	'md-home': home.md,
	'ios-close': close.ios,
	'md-close': close.md,
	'ios-grid': grid.ios,
	'md-grid': grid.md,
	'ios-list': list.ios,
	'md-list': list.md,
	'ios-image': image.ios,
	'md-image': image.md,
	'ios-images': images.ios,
	'md-images': images.md,
	'ios-albums': albums.ios,
	'md-albums': albums.md,
});

// import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
// const { SplashScreen, StatusBar, Network } = Plugins;
const { StatusBar } = Plugins;

Vue.config.productionTip = false;

// Tell Vue that the ion-components aren’t Vue components
Vue.config.ignoredElements = [/^ion-/];

StatusBar.hide();

Vue.use(Ionic);

export const globalStore = new Vue({
	data: {
		items: items,
		menus: menus,
	},
	created() {
		this.items.forEach(item => {
			item.thumbnail_url = `https://picsum.photos/id/${item.id}/400/400`;
		});
	},
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
