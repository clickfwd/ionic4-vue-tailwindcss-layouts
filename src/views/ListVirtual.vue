<template>
	<ion-page>
		<app-header title="List Virtual" />
		<ion-content>
			<ion-list>
				<ion-list-header>
					<ion-label>Items</ion-label>
				</ion-list-header>
				<RecycleScroller
					class="scroller"
					:items="items"
					:item-size="72"
					:buffer="200"
					key-field="id"
					v-slot="{ item }"
				>
					<div class="h-16">
						<ion-item @click="viewDetail(item)" class="w-full">
							<ion-thumbnail slot="start">
								<ion-img
									:src="item.thumbnail_url"
									class="rounded"
								></ion-img>
							</ion-thumbnail>
							<ion-label>{{ item.title }}</ion-label>
						</ion-item>
					</div>
				</RecycleScroller>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { RecycleScroller } from 'vue-virtual-scroller';
import { globalStore } from '@/main.js';
// import items from '@/data.json';

export default {
	components: {
		AppHeader,
		RecycleScroller,
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

<style>
.scroller {
	height: 100vh;
	overflow-y: auto;
}
</style>
