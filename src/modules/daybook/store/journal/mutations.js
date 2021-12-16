

export const setEsntries = (state, entries) => {

   state.entryes = [ ...state.entryes, ...entries ]
   state.isloading = false

}

export const updateEsntry = (state, entry) => { //entry update

   const idx = state.entryes.map(entry => entry.id ).indexOf(entry.id)

   state.entryes[idx] = entry

}

export const adEsntry = (/*state*/) => {

}




