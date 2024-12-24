import {ref, computed, ComputedRef} from 'vue'
import type {Ref} from  'vue'
import axios from "axios";
import {route} from "ziggy-js";


export interface TeamMemberForm {
    name: string | null;
    email: string | null;
    phone: string | null;
    roles:number[];
    sat_nav: 'WAYS' | 'GOOGLE' | 'APPLE';
}

  const DEFAULT_TEAM_MEMBER_FORM: TeamMemberForm = {
    name: null,
    email: null,
    phone: null,
    roles: [],
    sat_nav: 'WAYS'

}
const defaultTeamMemberForm = ref(JSON.parse(JSON.stringify({...DEFAULT_TEAM_MEMBER_FORM})))
const isLoaderActive:Ref<boolean> = ref(false)
const isCreateLoaderActive:Ref<boolean> = ref(false)
const isCreateDrawerOpen:Ref<boolean> = ref(false)
const operationMode: Ref<string> = ref('create')
const isOperationCreateMode: ComputedRef<boolean> = computed(() => operationMode.value === 'create')
const satNavOptions = ref([])
const rolesOptions = ref([])
export const useTeamMembers = () => {


    const openAddTeamMemberDrawer = async () => {
        try {
            operationMode.value = 'create'
            satNavOptions.value = []
            rolesOptions.value = []
            defaultTeamMemberForm.value = JSON.parse(JSON.stringify({...DEFAULT_TEAM_MEMBER_FORM}))
            const response = await axios.get(route('team.members.create'));
            const {data} = response
            const {roles , navs} = data?.options


            if (data) {
                satNavOptions.value = navs || []
                rolesOptions.value = roles || []
                isCreateDrawerOpen.value = true
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const openEditTeamMemberDrawer = async (id: number) => {
        try {
            operationMode.value = 'update'
            satNavOptions.value = []
            rolesOptions.value = []

            const response = await axios.get(route('team.members.show', {member: id}));
            const {data} = response
            const { navs ,roles , member} = data?.options
            if (data) {

                satNavOptions.value = navs || []
                rolesOptions.value = roles || []
                defaultTeamMemberForm.value = member || {...DEFAULT_TEAM_MEMBER_FORM}
                isCreateDrawerOpen.value = true
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const reset = () => {
         isLoaderActive.value = false
          isCreateLoaderActive.value = false
          isCreateDrawerOpen.value = false
          satNavOptions.value = []
          rolesOptions.value = []
    }



    return {
        openAddTeamMemberDrawer ,
        openEditTeamMemberDrawer ,
        isLoaderActive ,
        isCreateDrawerOpen ,
        isOperationCreateMode ,
        defaultTeamMemberForm ,
        satNavOptions : computed(() => satNavOptions.value || []) ,
        reset ,
        rolesOptions : computed(() => rolesOptions.value || []),
        isCreateLoaderActive , DEFAULT_TEAM_MEMBER_FORM
    }


}
