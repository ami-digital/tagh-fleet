import {ref , computed} from 'vue'
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
const search:Ref<string | null> = ref(null)
const isLoaderActive:Ref<boolean> = ref(false)
const isCreateLoaderActive:Ref<boolean> = ref(false)
const isCreateDrawerOpen:Ref<boolean> = ref(false)
const satNavOptions = ref([])
const rolesOptions = ref([])
export const useTeamMembers = () => {


    const openAddTeamMemberDrawer = async () => {
        try {
            satNavOptions.value = []
            rolesOptions.value = []

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




    const reset = () => {
         isLoaderActive.value = false
          isCreateLoaderActive.value = false
          isCreateDrawerOpen.value = false
          satNavOptions.value = []
          rolesOptions.value = []
    }



    return {
        openAddTeamMemberDrawer ,
        isLoaderActive ,
        isCreateDrawerOpen ,
        satNavOptions : computed(() => satNavOptions.value || []) ,
        reset ,
        rolesOptions : computed(() => rolesOptions.value || []),
        isCreateLoaderActive , DEFAULT_TEAM_MEMBER_FORM
    }


}
