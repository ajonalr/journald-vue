import { ref } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {

    const store = useStore();

    const createdUser = async(user) => {
        const resp = await store.dispatch('auth/createdUser', user);
        return resp
    }

    return {
        createdUser
    }
}
export default useAuth