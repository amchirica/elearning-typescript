import axios from 'axios';
import {create} from 'zustand'

export interface AuthStore {
    loading: boolean;
    apiResponse: {
        message: any | null;
        status: boolean | null;
    };
    userProfile?: {
        email?: string | null;
        firstname?: string | null;
        lastname?: string | null;
        role?: string | null;
        connected?: boolean;
    };
    setProfile: () =>Promise<void>;
    removeProfile: () => void;
    logout: () => Promise<void>;
    userProfilePopup: boolean;
}

const authStore = create<AuthStore>((set) => ({
    loading: false,
    userProfilePopup: false,
    apiResponse: {
        message: null,
        status: false
    } || null,
    userProfile: {
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        connected: false
    },
    setProfile: async () => {
        try {
            const { data } = await axios({
                method: "GET",
                url: `/api/auth/checkUser`
            })
            console.log(data);
            const profile = {
                ...data.user,
                connected: true 
            }
            
            if (!localStorage.getItem('userProfile')) {
                localStorage.setItem('userProfile', JSON.stringify(profile))
            } 
            if (localStorage.getItem('userProfile') !== data.user) {
                localStorage.setItem('userProfile', JSON.stringify(profile))
            }
            authStore.setState({
                userProfile: JSON.parse(localStorage.getItem('userProfile') as string )
            })
        } catch (err) {
            console.error(err)
        }
    },
    removeProfile: () => {
        localStorage.removeItem('userProfile')
    },
    logout: async () => {
        try {
            await axios({
                method: "GET",
                url: '/api/auth/logout'
            })
            localStorage.removeItem('userProfile')
        } catch (err) {
            console.error(err)
        }
    }
}))

export default authStore;