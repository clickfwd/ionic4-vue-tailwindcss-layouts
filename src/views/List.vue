<template>
	<ion-page>
		<app-header title="List" />
		<ion-content>
			<ion-list>
				<ion-list-header>
					<ion-label>Items</ion-label>
				</ion-list-header>
				<ion-item
					v-for="item in items"
					:key="item.id"
					@click="viewDetail(item)"
				>
					<ion-thumbnail slot="start">
						<ion-img
							:src="item.thumbnail_url"
							class="rounded"
						></ion-img>
					</ion-thumbnail>
					<ion-label>{{ item.title }}</ion-label>
				</ion-item>
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
