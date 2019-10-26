<template>
  <ion-page>
    <app-header title="Widgets" />
    <ion-content padding>
      <div v-if="items">
        <ion-slides ref="slider" pager="false" scrollbar="true" class="mt-4">
          <ion-slide
            v-for="item in items"
            :key="item.id"
            @click="viewDetail(item)"
          >
            <div class="w-full flex flex-col">
              <div class="w-full relative aspect-ratio-square bg-gray-300">
                <ion-img
                  :src="item.thumbnail_url"
                  class="absolute object-cover w-full h-full"
                >
                </ion-img>
              </div>
              <div class="truncate p-2 mb-2 text-gray-700">
                {{ item.title }}
              </div>
            </div>
          </ion-slide>
        </ion-slides>
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
      slideOpts: {
        spaceBetween: 0,
        slidesPerView: 2,
        freeMode: true,
      },
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
  mounted() {
    let slides = this.$refs.slider;
    this.$nextTick(() => {
      slides.options = this.slideOpts;
    });
  },
  // Use updated when loading data from API
  updated() {
    let slides = this.$refs.slider;
    this.$nextTick(() => {
      slides.options = this.slideOpts;
    });
  },
};
</script>
