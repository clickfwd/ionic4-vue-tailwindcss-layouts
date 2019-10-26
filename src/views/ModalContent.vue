<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="dismiss">
            <ion-icon name="close" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" @click="dismiss()"
        >Dismiss the Modal</ion-button
      >
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
            <ion-img :src="item.thumbnail_url"></ion-img>
          </ion-thumbnail>
          <ion-label>{{ item.title }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { globalStore } from '@/main.js';

export default {
  name: 'Modal',
  props: {
    title: String,
  },
  data() {
    return {
      items: globalStore.items,
    };
  },
  methods: {
    dismiss: async function() {
      await this.$ionic.modalController.dismiss();
    },
    viewDetail(item) {
      this.$router.push({
        name: 'listing',
        params: { id: item.id, item: item },
      });
      this.$ionic.modalController.dismiss();
    },
  },
};
</script>
