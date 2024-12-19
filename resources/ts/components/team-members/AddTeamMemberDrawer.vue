<script setup lang="ts">



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
    <section v-if="model" class="side-drawer  text-gray-app overflow-auto absolute transform top-0 bottom-0    bg-white  w-full    " >

      <div class="w-full relative">
        <div class="absolute right-3 top-3">
          <q-btn round color="blue" icon="close" @click="() =>emits('close')" />

        </div>
      </div>

      <section class="grid grid-cols-2">





      </section>


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
