<script setup lang="ts">
import { TeamMemberForm, useTeamMembers} from "../../core/composable/useTeamMembers";
import {useTemplateRef} from 'vue'
import {router, useForm, usePage} from "@inertiajs/vue3";
import {route} from "ziggy-js";
import {emailValidator, requiredValidator} from "../../core/utils/validators";

const emits = defineEmits<{
    (e: 'close'): void;
    (e: 'onSubmit'): void;
}>();
interface Props {
    isLoaderActive?: boolean;

    isCreateLoaderActive?: boolean;
}

const $page = usePage()
withDefaults(defineProps<Props>(), { isLoaderActive: true, isCreateLoaderActive: false  , satNavOptions : () => [] ,rolesOptions : () => []});
const model = defineModel({ required: true, default: false });

const {rolesOptions , satNavOptions,isCreateDrawerOpen ,isCreateLoaderActive , DEFAULT_TEAM_MEMBER_FORM } = useTeamMembers()


const form = useForm<TeamMemberForm>({...DEFAULT_TEAM_MEMBER_FORM})

const fromRef = useTemplateRef<HTMLElement | null>('add-members-form');
const submit = async () => {

        if (fromRef.value) {
            const isValid = await fromRef.value.validate();
            if (!isValid) return
        }


    isCreateLoaderActive.value = true

    form.post(route('team.members.store'), {
        preserveState: true,
        onSuccess: () => {
            isCreateDrawerOpen.value = false
            router.visit(route('team.members.index'))
        },

        onFinish : () => {
            isCreateLoaderActive.value = false
        }
    })
}

</script>

<template>
    <transition name="slide-up">
        <section v-if="model" class="side-drawer text-gray-app overflow-auto absolute transform top-0 bottom-0 bg-[#F6F6F6] w-full">
            <section class="max-w-4xl w-full mx-auto">
                <div class="w-full relative py-6">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="mb-0 text-2xl">Add New Team Member</p>
                        </div>
                        <q-icon size="md" class="text-gray-500 cursor-pointer hover:text-red-500" name="close" @click="() => emits('close')" />
                    </div>
                </div>


                <q-separator />
                <div class="rounded mt-4 p-5 bg-white shadow shadow-xl">
                    <q-form ref="add-members-form">
                        <!-- Name -->
                        <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                            <label class="flex items-center sm:justify-end max-sm:mx-2  max-sm:justify-start  max-sm:mb-2 text-sm font-semibold   text-black col-span-2">
                                <span class="text-red-300 mr-1">*</span> Name:
                            </label>
                            <q-input v-model="form.name" :error="!!form.errors.name"  :error-message="form.errors.name" :rules="[requiredValidator]" outlined dense placeholder="Ahmed M" class="col-span-10 w-full" />
                        </div>

                        <!-- Email -->
                        <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                            <label class="flex items-center sm:justify-end max-sm:mx-2   max-sm:justify-start  max-sm:mb-2 text-sm font-semibold   text-black col-span-2">
                                <span class="text-red-300 mr-1">*</span> Email:
                            </label>
                            <q-input  v-model="form.email" :error="!!form.errors.email"  :error-message="form.errors.email" :rules="[requiredValidator , emailValidator]" outlined dense type="email" placeholder="ahmed@tagfleet.com" class="col-span-10 w-full" />
                        </div>

<!--                        &lt;!&ndash; Password &ndash;&gt;-->
<!--                        <div class="grid grid-cols-12 space-x-3 items-center mb-4">-->
<!--                            <label class="flex items-center sm:justify-end  max-sm:mx-2  max-sm:justify-start  max-sm:mb-2 text-sm font-semibold   text-black col-span-2">-->
<!--                                <span class="text-red-300 mr-1">*</span> Password:-->
<!--                            </label>-->
<!--                            <q-input v-model="form.email"  outlined dense type="password" placeholder="********" class="col-span-10 w-full" />-->
<!--                        </div>-->

                        <!-- Phone -->
                        <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                            <label class="flex items-center sm:justify-end max-sm:mx-2   max-sm:justify-start  max-sm:mb-2 text-sm font-semibold   text-black col-span-2">
                                Phone:
                            </label>
                            <q-input v-model="form.phone" :error="!!form.errors.phone"  :error-message="form.errors.phone"  :rules="[requiredValidator]" outlined dense placeholder="+44" class="col-span-10 w-full" />
                        </div>

                        <!-- Roles -->
                        <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                            <label class="flex items-center sm:justify-end max-sm:mx-2   max-sm:justify-start  max-sm:mb-2 text-sm font-semibold   text-black col-span-2">
                                <span class="text-red-300 mr-1">*</span> Roles:
                            </label>
                            <q-select v-model="form.roles" :rules="[requiredValidator]"  :error="!!form.errors.roles"  :error-message="form.errors.roles" map-options emit-value   option-label="name"
                                      option-value="id" outlined dense multiple :options="rolesOptions" placeholder="Select Team Member's Role(s)" class="col-span-10 w-full" />
                        </div>

                        <!-- Sat Nav -->
                        <div class="grid grid-cols-12 space-x-3 items-center mb-4">
                            <label class="flex items-center sm:justify-end max-sm:mx-2   max-sm:justify-start  max-sm:mb-2 text-sm font-semibold   text-black col-span-2">
                                Sat Nav:
                            </label>
                            <q-select v-model="form.sat_nav" :rules="[requiredValidator]" :error="!!form.errors.sat_nav"  :error-message="form.errors.sat_nav" outlined dense  map-options emit-value   :options="satNavOptions" placeholder="Default (Waze)" class="col-span-10 w-full" />
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex justify-end gap-4 mt-4">
                            <q-btn style="font-weight: normal; border-radius: 6px" color="red" outline @click="() => emits('close')" label="Cancel" />
                            <q-btn style="font-weight: normal; border-radius: 6px" :loading="isCreateLoaderActive" :disabled="isCreateLoaderActive" @click="submit" label="Save" color="blue" unelevated type="submit" />
                        </div>
                    </q-form>
                </div>
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

/* Responsive Design */
@media (max-width: 768px) {
    .side-drawer {
        width: 100%;
        padding: 0;
    }
    section.max-w-4xl {
        width: 100%;
        padding: 0 1rem;
    }
    .grid {
        grid-template-columns: 1fr;
    }
    .q-form {
        padding: 1rem;
    }
}
</style>
