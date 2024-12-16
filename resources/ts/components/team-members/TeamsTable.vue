<script setup lang="ts">
import { ref } from "vue";
import {event} from "quasar";



const columns = ref([
    { name: "name", label: "Name", field: "name",  align: 'left', sortable: true },
    { name: "email", label: "Email", field: "email",  align: 'left', sortable: true },
    { name: "phone", label: "Phone", field: "phone", align: 'left',  sortable: true,},
    { name: "roles", label: "Roles", field: "roles",  align: 'left', sortable: true },
    { name: "lastLogin", label: "Last Login", field: "lastLogin",  align: 'left', sortable: true },
    { name: "appVersion", label: "App Version", field: "appVersion",  align: 'left', sortable: true },
    { name: "actions", label: "", field: "actions",  align: 'left', },

]);

const rows = ref([
    {
        id: 1,
        name: "Chantelle Henshall",
        email: "coboh24908@pokeline.com",
        phone: "+44 786 645 4587",
        roles: "39 Lakeside Road, EN8 0EX",
        lastLogin: "Orders: Explore how to tailor your view, manage bulk actions, and op",
        appVersion: "Dec 1, 2024",
        actions: "",

    },
]);




</script>

<template>


    <section id="order-table">
        <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
            color="primary"
            hide-pagination
            class="rounded-lg shadow-sm bg-white text-[#61646A]"
            table-header-class="bg-[#eff9f8] font-semibold text-left"
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
