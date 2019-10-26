<template>
	<ion-page>
		<app-header title="Cards" />
		<ion-content>
			<ion-list>
				<ion-list-header>
					<ion-label>Items</ion-label>
				</ion-list-header>
				<ion-card
					v-for="item in items"
					:key="item.id"
					@click="viewDetail(item)"
				>
					<img v-if="item.thumbnail_url" :src="item.thumbnail_url" />
					<ion-card-header>
						<ion-card-title>{{ item.title }}</ion-card-title>
					</ion-card-header>
					<ion-card-content>
						{{ item.description }}
					</ion-card-content>
				</ion-card>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import { globalStore } from '@/main.js';

export default {
	components: {
		AppHeader,
	},
	data() {
		return {
			items: globalStore.items,
		};
	},
	methods: {
		viewDetail(item) {
			this.$router.push({
				name: 'listing',
				params: { id: item.id, item: item },
			});
		},
	},
};
</script>
