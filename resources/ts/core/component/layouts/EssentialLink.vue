
<script setup lang="ts">

import { defineProps, withDefaults } from 'vue';
import { router, usePage } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

defineOptions({
  name: 'EssentialLink'
});

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  svg?: string;
    svgActive?: string;
  children?: {title: string, link: string}[];
    isActive?:boolean,
};

const emit = defineEmits(['set-active']);

const props = withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: 'login',
  icon: '',
  svg: '',
    svgActive: '',
});

const handleClick = () => {
    if (props.link) {
        emit('set-active', props.link);
        // router.visit(route(props.link));
    }
};

</script>

<template>
    <div   style="text-decoration:none">
        <div class="group/links side-links">
            <q-expansion-item
                v-if="props.children"
                group="somegroup"
                expand-separator
                :label="title"
                :icon="icon ? icon : `img:${svg}`"
                expand-icon="chevron_right"
                expanded-icon="keyboard_arrow_down"
                @click="handleClick"
                :class="isActive ? 'bg-[#DEF1FF] active-side-link' : ''"
            >
                <template v-slot:header>
                    <div
                        class="pr-3 flex items-center ">
                        <q-icon :name="icon ? icon :  `img:${isActive ? svgActive : svg}`" size="18px" class="p-0 text-grey"/>
                    </div>
                    <q-item-section>
                       <span class="text-[#61646A] dropdown-parent-heading">
                            {{ title }}
                       </span>
                    </q-item-section>
                </template>
                <q-card class="p-0 pl-12">
                    <q-card-section  class="p-0">
                        <q-item
                            v-for="(child, index) in children"
                            :key="index"
                            clickable
                            class="py-0"
                        >
                            <q-item-section class="py-0 dropdown-child-item" >
                                <span class="text-[#61646A]">
                                {{ child.title }}
                                </span>
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                </q-card>
            </q-expansion-item>

            <q-item
                v-else
                clickable
                tag="div"
                @click="handleClick"
                :class="isActive ? 'bg-[#DEF1FF] active-side-link' : ''"
            >
                <div
                    class="pr-3 flex items-center ">
                    <q-icon :name="icon ? icon : `img:${isActive ? svgActive : svg}`" size="18px"  class="p-0 text-grey"/>
                </div>

                <q-item-section>
                    <q-item-label class="text-[#61646A] text-sm">{{ title }} </q-item-label>
                </q-item-section>
            </q-item>

        </div>
    </div>
</template>

<style lang="scss" >

.side-links .q-focus-helper {
    background: #1b9bfd !important;
}

.side-links:hover {
    .q-item__label, .q-item .q-item__section span.dropdown-parent-heading, .q-item i {
        color: #5694E3 !important;
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
        color: #5694E3 !important;
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
    background: #00A3FF;
}
</style>
