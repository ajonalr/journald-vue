import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {

    const store = useStore();

    const createdUser = async (user) => {
        const resp = await store.dispatch('auth/createdUser', user);
        return resp
    }

    const loginUser = async (user) => {
        const resp = await store.dispatch('auth/singInUser', user)
        return resp
    }

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication');
        return resp
    }

    const logout = async () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')
        // limpiar entradas
    }

    return {
        checkAuthStatus,
        createdUser,
        loginUser,
        logout,

        authStatus: computed( () => store.getters['auth/currenState'] ),
        username: computed( () => store.getters['auth/username'])
    }
}
export default useAuth