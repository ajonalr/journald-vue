// export const myGetter =  (state) => {

// }


export const loginUser = (state, { user, idToken, refreshToken }) => {
   if (idToken) {
      localStorage.setItem('idToken', idToken);
      state.idToken = idToken
   }
   if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
      state.refreshToken = refreshToken
   }
   state.user = user;
   state.status = 'auteticated'
}

export const logout = (state) => {

   state.status = 'not-authenticated'
   state.user = null
   state.idToken = null
   state.refreshToken = null

   localStorage.removeItem('idToken')
   localStorage.removeItem('refreshToken')

}
