<template>
	<div id="app">
		<ion-app>
			<sidebar-menu />
			<ion-vue-router main :animated="false" />
		</ion-app>
	</div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu'

export default {
	components: {
		SidebarMenu,
	},
	methods: {},
	mounted() {
		// console.log(this.$ionic)
	},
}
</script>
