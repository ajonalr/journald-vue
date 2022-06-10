import authApi from '@/api/AuthApi'


// export const myActions = async ({ commit }) => {

// }


export const createdUser = async ({ commit }, user) => {
    const { email, nombre, password } = user;
    try {
        const { data } = await authApi.post(':signUp', {
            email,
            password,
            returnSecureToken: true
        })
        const { idToken, refreshToken } = data;
        await authApi.post(':update', { displayName: nombre, idToken })
        delete user.password
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }
    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}

