<template>
  <ion-page>
    <app-header title="Grid" />
    <ion-content>
      <div class="grid">
        <div
          v-for="item in items"
          :key="item.id"
          class="min-w-sm relative aspect-ratio-square bg-gray-300"
          @click="viewDetail(item)"
        >
          <img
            :src="item.thumbnail_url"
            class="absolute object-cover w-full h-full"
          />
        </div>
      </div>
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

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 1fr !important;
  grid-gap: 0;
}
</style>
