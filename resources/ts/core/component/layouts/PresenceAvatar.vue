<script setup lang="ts">

import {useQuasar} from "quasar";
import { usePage} from "@inertiajs/vue3";


const $q = useQuasar()
const $page = usePage()



defineOptions({
    name : 'PresenceAvatar'
})
const props = defineProps({

  avatar: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: 'EM'
  }
})



</script>

<template>
  <section id="presence-avatar">

      <div>
          <div>
              <q-btn
                  color="grey"
                  text-color="white"
                  style="border-radius: 100px; width: 35px; height: 35px;"
                  unelevated
                  padding="8px 10px"
                  dense
                  size="sm"
                  icon="person"
              >

              </q-btn>
          </div>
      </div>
  </section>


</template>


<style>
#presence-avatar .q-badge--floating{
  bottom: -10px !important;
}
</style>
