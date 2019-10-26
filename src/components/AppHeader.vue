<template>
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button v-if="isHomeMenu" />
				<ion-back-button v-else text="" />
			</ion-buttons>
			<ion-title>{{ title }}</ion-title>
		</ion-toolbar>
	</ion-header>
</template>

<script>
export default {
	props: {
		title: String,
	},
	computed: {
		isHomeMenu() {
			return this.$route.path === '/';
		},
	},
};
</script>
