import authApi from '@/api/AuthApi'


// export const myActions = async ({ commit }) => {

// }


export const createdUser = async({ commit }, user) => {

    const { email, nombre, password } = user;

    try {
        const { data } = await authApi.post(':signUp', {
            email,
            password,
            returnSecureToken: true
        })
        console.log(data);
        return { ok: true }
    } catch (error) {
        console.log('entro');
        return { ok: false, message: error.response.data.error.message }
    }

}