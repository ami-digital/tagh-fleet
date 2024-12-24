<script setup lang="ts">


const emits = defineEmits<{
(e : 'onCreat'): void;
}>();

</script>

<template>

    <q-card
        bordered
        padding="14px 24px"
        v-ripple
        class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/6 bg-white cursor-pointer text-accent group:plan-card px-4 sm:px-6 py-3 my-4"
        @click="() => emits('onCreat')"
    >
        <q-card-section class="flex items-center q-pa-none">
            <q-icon
                name="add"
                color="white"
                size="sm"
                class="bg-[#1529514a] p-2 sm:p-3 rounded-full mr-3 sm:mr-4"
            />
            <div>
                <p class="p-0 m-0 font-semibold text-base sm:text-lg">Create plan manually</p>
                <span class="text-xs sm:text-sm">Add stops one at a time</span>
            </div>
        </q-card-section>
    </q-card>
</template>

<style scoped lang="scss">

</style>
