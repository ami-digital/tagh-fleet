<script setup lang="ts">

import {computed, ref} from "vue";

import {leftDrawerOpen} from "../../utils";
import {  usePage} from "@inertiajs/vue3";
import PresenceAvatar from "./PresenceAvatar.vue";
import UserProfileMenu from "./UserProfileMenu.vue";


const user = ref(null)

defineOptions({
  name: 'AppHorizontalNav'
});

const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;

}


const $page = usePage()
const appLogo = computed(() => $page?.props?.settings?.app_logo)
</script>

<template>
  <q-header class="bg-white text-grey md:px-4 sm:px-1 h-[60px] border-b py-2 main-nav"  >
    <q-toolbar class="px-0">
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer()" v-if="$q.screen.lt.md" />
        <div v-if="$q.screen.gt.xs" >
            <q-img    class="   w-[130px] max-w-[200px] max-h-[50px]"  :src='appLogo' />
        </div>
        <q-space />
      <div class="flex items-center">

          <div class="mx-4">
              <q-btn

                  text-color=""
                  style="border-radius: 100px; width: 35px; height: 35px;"
                  unelevated
                  flat
                  padding="0"
                  dense
                  size="md"
                  icon="settings"
              >

              </q-btn>
          </div>

          <div class="flex items-center">
            <div class="cursor-pointer flex items-center">
                <PresenceAvatar  />
            </div>
            <UserProfileMenu />
        </div>

      </div>


    </q-toolbar>
  </q-header>
</template>


<style scoped lang="scss">
#nav-bar {
    @media (min-width: 1024px) {
        left: 239px !important;
    }
}
.cart-btn {
    position: relative;
}

.cart-badge {
    position: absolute;
}
</style>
