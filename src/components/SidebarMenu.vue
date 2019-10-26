<template>
  <ion-menu type="overlay" side="start">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-list-header>Navigate</ion-list-header>
        <ion-menu-toggle auto-hide="false" v-for="p in appPages" :key="p.title">
          <ion-item button @click="navigate(p.path)">
            <ion-icon
              slot="start"
              :name="p.icon"
              class="text-gray-700  w-4 h-4"
            ></ion-icon>
            <ion-label class="text-gray-700">
              {{ p.title }}
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import { globalStore } from '@/main.js';

export default {
  data() {
    return {
      contentId: String,
      appPages: globalStore.menus,
    };
  },
  methods: {
    navigate(url) {
      if (this.$router.currentRoute.path !== url) {
        this.$router.push(url);
      }
    },
  },
};
</script>
