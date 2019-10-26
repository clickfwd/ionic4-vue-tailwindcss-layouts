<template>
	<ion-page>
		<app-header title="Home" />
		<ion-content padding>
			<div class="py-4 ">
				<div class="font-bold text-center">
					Ionic 4, Vue, Tailwind CSS Demo
				</div>
				<ion-list class="mt-6">
					<ion-item v-for="(menu, index) in homeMenus" :key="index">
						<router-link
							:to="menu.path"
							class="w-full flex items-center"
						>
							<ion-icon
								:name="menu.icon"
								class="flex-shrink-0 text-gray-700 mr-3 w-4 h-4"
							/>
							<ion-label class="text-gray-700">
								{{ menu.title }}
							</ion-label>
						</router-link>
					</ion-item>
				</ion-list>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import { globalStore } from '@/main.js';

export default {
	name: 'home',
	components: { AppHeader },
	data() {
		return {
			menus: globalStore.menus,
		};
	},
	computed: {
		homeMenus() {
			return this.menus.slice(1);
		},
	},
};
</script>
