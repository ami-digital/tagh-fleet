<script setup lang="ts">

import {router, usePage} from '@inertiajs/vue3';
import {route} from 'ziggy-js';

import Planing from '@images/svg/sidebar/route-planning.svg';
import PlaningActive from '@images/svg/sidebar/route-planning-active.svg';
import Dashboard from '@images/svg/sidebar/live-dashboard.svg';
import DashboardActive from '@images/svg/sidebar/dashboard-active.svg';
import ordersSvg from '@images/svg/sidebar/orders.svg';
import ordersActive from '@images/svg/sidebar/orders-active.svg';
import logo from '@images/logos/app_logo.svg';
import DashboardBlue from '@images/svg/sidebar/live-dashboard.svg';
import TeamMemberSvg from '@images/svg/sidebar/team-members.svg';
import TeamMemberActiveSvg from '@images/svg/sidebar/team-members-active.svg';
import vehicleSvg from '@images/svg/sidebar/vehicles.svg';
import vehicleActiveSvg from '@images/svg/sidebar/vehicles-active.svg';

import {ref} from "vue";
import {leftDrawerOpen} from "../../utils";
import {useQuasar} from "quasar";

const currentUrl = ref(usePage()?.url);

defineOptions({
    name: 'MainSidebar'
});

const $q = useQuasar()
let stopWatch: (() => void) | null = null;
const miniState = ref(true)
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
stopWatch = watch(
    () => usePage().url,
    (newUrl) => {
        currentUrl.value = newUrl;
    }
);

onUnmounted(() => {
    if (stopWatch) {
        stopWatch()
    }
})

</script>

<template class="bg-white">


    <q-drawer
        id="side-bar"
        v-model="leftDrawerOpen"
        class=" relative"
        show-if-above
        mini-to-overlay
        :mini="miniState"
        @mouseenter="miniState = false"
        @mouseleave="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered

    >
        <div class="">
            <div class="h-[60px] flex items-center border-b  p-2 cursor-pointer"
                 @click="router.visit(route('/routes'))">
                <img :src="logo"  alt="Tagh Fleet" width="100">

            </div>


            <q-list class="mt-2">
                <div class="side-links">
                    <q-item
                        :class="currentUrl === '/plans' ? 'bg-blue-100 active-side-link' : ''"
                        clickable
                        tag="div"
                        @click="simpleSideLinkClick('plans.index')"
                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="currentUrl === '/plans' ? `img:${PlaningActive}` : `img:${Planing}`"
                                class="p-0 text-grey"
                                size="24px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Plans</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="side-links">
                    <q-item
                        :class="currentUrl === '/dashboard' ? 'bg-blue-100 active-side-link' : ''"
                        clickable
                        tag="div"
                        @click="simpleSideLinkClick('dashboard.index')"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="currentUrl === '/dashboard' ? `img:${DashboardActive}` : `img:${Dashboard}`"
                                class="p-0 text-grey"
                                size="24px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Live Dashboard</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="side-links">
                    <q-item
                        :class="currentUrl === '/orders' ? 'bg-blue-100 active-side-link' : ''"
                        clickable
                        @click="simpleSideLinkClick('orders.index')"
                        tag="div"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="currentUrl === '/orders' ? `img:${ordersActive}` : `img:${ordersSvg}`"
                                class="p-0 text-grey"
                                size="24px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Orders</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="side-links">
                    <q-item
                        :class="currentUrl === '/team/members' ? 'bg-blue-100 active-side-link' : ''"
                        clickable
                        @click="simpleSideLinkClick('team.members.index')"
                        tag="div"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="currentUrl === '/team-members' ? `img:${TeamMemberActiveSvg}` : `img:${TeamMemberSvg}`"
                                class="p-0 text-grey"
                                size="24px"
                            />
                        </div>
                        <q-item-section class="ml-2">
                            <q-item-label class="text-[#000] text-sm">Team Member</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="side-links">
                    <q-item
                        :class="currentUrl === '/vehicles/vehicles' ? 'bg-blue-100 active-side-link' : ''"
                        clickable
                        @click="simpleSideLinkClick('vehicles.index')"
                        tag="div"

                    >
                        <div class="  flex items-center">
                            <q-icon
                                :name="currentUrl === '/vehicles/vehicles' ? `img:${vehicleActiveSvg}` : `img:${vehicleSvg}`"
                                class="p-0 text-grey"
                                size="24px"
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
        background: #214080 !important;
    }

    .side-links .q-hoverable:hover > .q-focus-helper {
        background: #214080 !important;
    }

    .side-links:hover {
        .q-item__label, .q-item .q-item__section span.dropdown-parent-heading, .q-item i {
            color: #214080 !important;
            font-weight: 500;
        }
    }

    .dropdown-child-item:hover {
        span {
            color: #214080 !important;
        }
    }

    .side-links .active-side-link {
        position: relative;

        .q-item__label, .q-item__section span.dropdown-parent-heading, i {
            color: #214080 !important;
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
        background: #214080;
    }
}
</style>
