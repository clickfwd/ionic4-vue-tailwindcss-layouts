<template>
	<ion-page>
		<app-header title="Modal" />
		<ion-content padding>
			<ion-button expand="block" @click="showModal"
				>Open Modal</ion-button
			>
		</ion-content>
	</ion-page>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import ModalContent from '@/views/ModalContent';

export default {
	components: {
		AppHeader,
	},
	methods: {
		showModal: async function() {
			const modal = await this.$ionic.modalController.create({
				component: ModalContent,
				componentProps: {
					router: this.$router,
					propsData: {
						title: 'Modal Content',
					},
				},
			});
			await modal.present();
		},
	},
};
</script>
