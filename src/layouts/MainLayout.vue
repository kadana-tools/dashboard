<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="q-px-lg q-pt-xl q-mb-lg">
            <div class="text-h4">Cardano Warrior stats</div>
            <div class="text-subtitle1">by Kadana-tools, {{ todaysDate }}</div>
          </div>
        </q-toolbar-title>


        <q-img
          src="~/assets/collection.gif"
          class="header-image absolute top"
        />
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            to="/"
            exact
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="castle" />
            </q-item-section>

            <q-item-section> Barracks </q-item-section>
          </q-item>

          <q-item
            to="/Territories"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="public" />
            </q-item-section>

            <q-item-section> Territories </q-item-section>
          </q-item>

          <q-item
            to="/Warehouse"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="storefront" />
            </q-item-section>

            <q-item-section> Warehouse </q-item-section>
          </q-item>


          <q-item
            to="/WhoAreWe"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="groups_2" />
            </q-item-section>

            <q-item-section> Who are we? </q-item-section>
          </q-item>

          <q-item
            to="/SOS"
            clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="sos" />
            </q-item-section>

            <q-item-section> Help </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
>

      <q-img
        class="absolute-top"
        src=~/assets/islands_banner.png
        style="height: 140px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="70px" class="q-mb-sm">
            <img src="~/assets/$0613.jpeg" />
          </q-avatar>
          <div class="text-weight-bold">Ada-handle</div>
          <div>$0613</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { KeepAlive, computed, ref } from "vue";
import { date } from "quasar";

defineOptions({
  name: "MainLayout",

  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "MMMM-Do-YYYY");
    },
  },

});


const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.header-image {
  height: 140px;
  z-index: -1;
  opacity: 0.4;
}
</style>
