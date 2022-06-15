// export const myGetter =  (state) => {

//    return state

// }

export const currenState = (state) => {
   return state.status
}

export const username = (state) => {
   return state.user?.name || '';
}