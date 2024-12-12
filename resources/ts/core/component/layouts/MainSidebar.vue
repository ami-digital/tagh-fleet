<script setup lang="ts">

import {router, usePage} from '@inertiajs/vue3';
import {route} from 'ziggy-js';

import Dashboard from '@images/svg/sidebar/live-dashboard.svg';
import ordersSvg from '@images/svg/sidebar/orders.svg';
import logo from '@images/logos/tagh_pos.svg';
import DashboardBlue from '@images/svg/sidebar/live-dashboard.svg';
import TeamMemberSvg from '@images/svg/sidebar/team-members.svg';
import vehicleSvg from '@images/svg/sidebar/vehicles.svg';

import {ref} from "vue";
import {leftDrawerOpen} from "../../utils";
import {useQuasar} from "quasar";

const {url} = usePage()

defineOptions({
    name: 'MainSidebar'
});

const $q = useQuasar()


const activeLink = ref<string>('');
const setActiveLink = (link: string) => {
    activeLink.value = link;

};

const simpleSideLinkClick = (pageLink: string) => {
    setActiveLink(pageLink)
    router.visit(route(pageLink));
    if ($q.screen.lt.md) {
        leftDrawerOpen.value = false;
    }
}

const miniState = ref(true)
</script>

<template class="bg-white">


    <q-drawer
        id="side-bar"
        v-model="leftDrawerOpen"

        class=" relative"
        show-if-above

        :mini="miniState"
        @mouseenter="miniState = false"
        @mouseleave="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered

    >
        <div class="">
            <div class="h-[60px] flex items-center border-b  p-2 cursor-pointer"
                 @click="router.visit(route('dashboard.index'))">
                <q-img
                    alt="Mammoth Log"
                    :src="logo"
                    width="100px"
                />
            </div>



            <q-list class="mt-2">


                <div class="side-links">
                    <q-item
                        :class="url === '/dashboard/index' ? 'bg-[#66C4B9] active-side-link' : ''"
                        clickable
                        tag="div"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="url === '/dashboard/index' ? `img:${DashboardBlue}` : `img:${Dashboard}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Live Dashboard</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item
                        :class="url === '/dashboard/index' ? 'bg-[#66C4B9] active-side-link' : ''"
                        clickable
                        tag="div"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="url === '/dashboard/index' ? `img:${ordersSvg}` : `img:${ordersSvg}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Orders</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item
                        :class="url === '/dashboard/index' ? 'bg-[#66C4B9] active-side-link' : ''"
                        clickable
                        tag="div"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="url === '/dashboard/index' ? `img:${TeamMemberSvg}` : `img:${TeamMemberSvg}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Team Member</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item
                        :class="url === '/dashboard/index' ? 'bg-[#66C4B9] active-side-link' : ''"
                        clickable
                        tag="div"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="url === '/dashboard/index' ? `img:${vehicleSvg}` : `img:${vehicleSvg}`"
                                class="p-0 text-grey"
                                size="18px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Vehicle </q-item-label>
                        </q-item-section>
                    </q-item>
                </div>


            </q-list>

        </div>

    </q-drawer>

</template>

<style lang="scss">
.app_sidebar .q-expansion-item__toggle-icon {
    display: none !important;
}
#side-bar {
    .child-item-container {
        padding-block: 1px;

        .q-item {
            max-height: 30px !important;
            min-height: 30px !important;
            padding-block: 0 !important;
            margin-block: 8px;
        }
    }


    .side-links .q-focus-helper {
        background: #66C4B9 !important;
    }

    .side-links .q-hoverable:hover > .q-focus-helper {
        background: #66C4B9 !important;
    }

    .side-links:hover {
        .q-item__label, .q-item .q-item__section span.dropdown-parent-heading, .q-item i {
            color: #66C4B9 !important;
            font-weight: 500;
        }
    }

    .dropdown-child-item:hover {
        span {
            color: #5694E3 !important;
        }
    }

    .side-links .active-side-link {
        position: relative;

        .q-item__label, .q-item__section span.dropdown-parent-heading, i {
            color: #66C4B9 !important;
            font-weight: 500;
        }
    }

    .side-links .active-side-link:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 48px;
        width: 6px;
        border-radius: 0px 4px 4px 0px;
        background: #66C4B9;
    }
}
</style>
