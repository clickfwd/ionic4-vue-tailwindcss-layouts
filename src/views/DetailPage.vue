<template>
	<ion-page>
		<app-header title="Detail" />
		<ion-content>
			<ion-img
				v-if="item.thumbnail_url"
				:src="item.thumbnail_url"
			></ion-img>
			<div class="p-4 font-bold text-gray-700">{{ item.title }}</div>
			<div class="px-4 pt-0 text-gray-500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				ornare, libero in rutrum blandit, quam nulla porta odio, a
				sodales quam velit at orci. Aliquam gravida dolor non arcu
				imperdiet tincidunt. Cras commodo, nisl non porta luctus, libero
				enim pellentesque neque, eget cursus enim nulla in felis.
				Praesent et est orci. Integer semper non tortor sit amet
				egestas. Aliquam blandit nisl sed auctor dapibus. Vestibulum
				aliquam ligula in eros maximus vestibulum. Nulla consectetur
				ante blandit elit egestas, vitae facilisis diam sagittis. Fusce
				venenatis lorem nisl, ut cursus tellus vestibulum sed. Donec eu
				ipsum tortor.
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
	components: {
		AppHeader,
	},
	props: {},
	computed: {
		item() {
			return this.$route.params.item;
		},
	},
};
</script>
