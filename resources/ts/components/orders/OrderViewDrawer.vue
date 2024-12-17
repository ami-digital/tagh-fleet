<script setup lang="ts">




import {onMounted} from "vue";

const model = defineModel({required : true, default: false});

interface Props {
  isLoaderActive?: boolean;
  isCreateLoaderActive?: boolean;
}



withDefaults(defineProps<Props>() , {isLoaderActive : true ,isCreateLoaderActive : false });

const emits = defineEmits<{
  (e : 'close'): void;
  (e : 'onSubmit'): void;


}>();




</script>

<template>
  <transition name="slide-up">
    <section v-if="model" class="side-drawer  text-gray-app overflow-auto absolute transform top-0 bottom-0    bg-white        w-full    " >
      <div >
        <slot name="header">
          <div class="w-full  items-center justify-between sm:p-6 sm:pb-0 p-3 pb-0">
            <div class="text-[#707070] text-[1.5rem] px-3">
              <slot name="title">
                <div class="flex justify-between items-center py-2 w-full">
asdas
                </div>
              </slot>
              <q-separator />
            </div>
          </div>
        </slot>
        <slot name="body">

        </slot>
        <slot name="footer">
          <section class="fixed bottom-0 right-0 w-full bg-white" >

          </section>
        </slot>
      </div>


    </section>

  </transition>
</template>

<style scoped>
.side-drawer {
    box-shadow: rgba(17, 17, 26, 0.1) 0 4px 16px, rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px;
}

.drawer-body {
    max-height: calc(100vh - 160px);
}

/* Slide up transition with delay */
.side-drawer-enter-active, .side-drawer-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
    transition-delay: 0.2s; /* Add delay for entry */
}

.side-drawer-enter, .side-drawer-leave-to {
    transform: translateY(100%);
    opacity: 0; /* Make it invisible when leaving */
}

.side-drawer-enter-to, .side-drawer-leave {
    transform: translateY(0);
    opacity: 1; /* Ensure it becomes visible when entering */
}
</style>
