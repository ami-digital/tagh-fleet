<script setup lang="ts">
import {router, usePage} from "@inertiajs/vue3";


import exit from '@images/svg/exit-arrow.svg';

import {route} from "ziggy-js";



const $page = usePage()


defineOptions({ name: 'UserProfileMenu' });




</script>


<template>
  <q-menu :offset="[0, 14]" class="rounded-md">

    <q-list  class="min-w-60 text-gray">


      <div class="my-2">
          <q-item>
              <div class="flex items-center no-wrap q-pb-sm">
                  <q-btn
                      color="primary"
                      text-color="white"
                      style="border-radius: 100px; width: 35px; height: 35px;"
                      unelevated
                      padding="8px 10px"
                      dense
                      size="sm"
                  >
                      ss

                  </q-btn>
                  <div class="q-ml-sm">
                      <div class="text-sm font-semibold text-primary">ss
                      </div>
                      <div class="text-weight-regular" style="font-size: 0.80rem;">
                         ss
                      </div>
                  </div>
              </div>
          </q-item>

          <q-separator class="mx-4" />



          <q-separator class="mx-4" />

          <q-item clickable v-close-popup @click="router.post(route('logout'))" class="px-4">
              <q-item-section  >

                  <div class="flex items-center">
                      <q-icon  :name="`img:${exit}`" size='xs' color="grey"  />
                      <span class="text-[#898989] pl-2">Logout</span>
                  </div>

              </q-item-section>
          </q-item>

      </div>

    </q-list>
  </q-menu>
</template>

<style scoped>

</style>
