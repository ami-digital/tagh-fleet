<script setup lang="ts">
import { ref } from "vue";
import {router} from "@inertiajs/vue3";
import {route} from "ziggy-js";

import {useTeamMembers} from "../../core/composable/useTeamMembers";


interface Props {
    items : any[]
}

withDefaults(defineProps<Props>() , {items : () => []})
const {openEditTeamMemberDrawer} = useTeamMembers()

const columns = ref([
    { name: "name", label: "Name", field: "name",  align: 'left', sortable: true },
    { name: "email", label: "Email", field: "email",  align: 'left', sortable: true },
    { name: "phone", label: "Phone", field: "phone", align: 'left',  sortable: true,},
    { name: "roles", label: "Roles", field: "roles",  align: 'left', sortable: true },
    { name: "sat_nav", label: "Sat nav", field: "sat_nav",  align: 'left', sortable: true },

    { name: "actions", label: "", field: "actions",  align: 'right', },

]);





</script>

<template>


    <section id="order-table">
        <q-table
            :rows="items"
            :columns="columns"
            row-key="id"
            flat
            color="primary"
            hide-pagination
            class="rounded-lg shadow-sm bg-white text-[#61646A]"
            table-header-class="bg-[#e8f4fd] font-semibold text-left"
        >

            <template v-slot:header-cell="props">
                <q-th
                    :props="props"
                    style="font-weight: 600; font-size: 14px; min-width: 180px"
                    class="order-table-slot hover:bg-[#FCFCFC]"
                >
                    {{ props.col.label }}
                </q-th>
            </template>

            <template v-slot:body-cell-actions="props">
                <td style="text-align: right">
                    <q-btn
                        @click.prevent="openEditTeamMemberDrawer(props.row.id )"
                        flat
                        round
                        icon="border_color"
                        size="sm"
                        class=" hover:text-blue-700 mx-2"
                        v-close-popup
                        unelevated
                    >
                    </q-btn>
                    <q-btn
                        @click="router.delete(route('team.members.destroy', { member: props.row.id }))"
                        flat
                        round
                        icon="delete_outline"
                        size="sm"
                        class=" hover:text-red-700 mx-2"
                        v-close-popup
                        unelevated
                    >
                    </q-btn>
                </td>
            </template>

        </q-table>
    </section>

</template>

<style lang="scss">
#order-table {
    .q-table--col-auto-width:has(.q-checkbox) {
        text-align: left;

        @media (max-width: 1000px ) {
            position: sticky;
            left: 0;
            z-index: 99;
            background:white;
        }
    }
    .q-checkbox {
        .q-checkbox__bg {
            border: 1px solid #DCDCDC;
            border-radius: 4px;
            width: 16px;
            height: 16px;
        }
    }
}
</style>
