<script lang="ts" setup>
import {ref} from "vue";

interface Props {
    type?: 'routedStop' | 'status' |'none';
    label?: string;
}

const props = withDefaults(defineProps<Props>() , {});
const selectedStatus = ref<string[]>([]);
const search = ref('')
const resetStatusFilters = () => {
    selectedStatus.value = [];
};

const statusOptions = ref([
    'Open',
    'Routed',
    'Delivered',
    'Undelivered',
    'On Hold',
    'Completed',
]);

const applyFilters = () => {
    console.log('Selected Filters:', selectedStatus.value);
};
</script>

<template>
    <div class="float-right">
        <div  v-if="type  == 'routedStop'"></div>
        <div  v-else-if="type  == 'status' ">
            <q-btn
                icon="filter_alt"
                unelevated
                padding="4px"
                size="sm"
                text-color="grey"
                @click.stop=""
            >

                <q-menu anchor="bottom right" self="top right" max-width="200px">
                    <q-card class="min-w-[100px]">
                        <q-input
                            v-model="search"
                            dense
                            placeholder="Search in filters"
                            outlined
                            class="p-2"
                        >
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>

                        <q-list bordered class="q-pb-sm" style="color: rgba(0, 0, 0, 0.88)">
                            <q-item v-for="(item, index) in statusOptions" :key="index" dense>
                                <q-checkbox
                                    v-model="selectedStatus"
                                    :val="item"
                                    :label="item"
                                    dense
                                    size="xs"
                                />
                            </q-item>
                        </q-list>

                        <div class="flex justify-between items-center p-2">
                            <q-btn
                                flat
                                unelevated
                                padding="0 8px "
                                size="md"

                                label="Reset" @click="resetStatusFilters" :disable="selectedStatus.length === 0" :color="selectedStatus.length === 0 ? 'grey' : 'primary'" />

                            <q-btn
                                color="primary"
                                v-close-popup
                                label="OK"
                                @click="applyFilters"
                                unelevated
                                size="sm"
                                padding="2px 8px"
                            />
                        </div>
                    </q-card>
                </q-menu>

            </q-btn>
        </div>
        <div v-else>
            <q-btn
                icon="search"
                unelevated
                padding="4px"
                size="sm"
                text-color="grey"
                @click.stop=""
            >
                <q-menu anchor="bottom right" self="top right">
                    <q-item>
                        <div class="flex no-wrap search-input">
                            <q-input v-model="search"
                                     outlined
                                     dense
                                     class="text-gray-app min-w-[200px] bg-white"
                                     :placeholder="`${label} Search`">
                            </q-input>
                            <div class=" bg-primary p-2 flex no-wrap items-center justify-center cursor-pointer" style="border-radius: 0 6px 6px 0">
                                <q-icon size="14px" class="text-gray-app  inline-block" color="white" name="search"/>
                                <span class="text-white ml-1">search</span>
                            </div>
                        </div>
                    </q-item>
                </q-menu>
            </q-btn>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
