

export const setEsntries = (state, entries) => {
   state.entryes = [...state.entryes, ...entries]
   state.isloading = false
}

export const updateEsntry = (state, entry) => { //entry update
   const idx = state.entryes.map(entry => entry.id).indexOf(entry.id)
   state.entryes[idx] = entry
}

export const adEsntry = (state, entry) => {
   state.entryes = [entry, ...state.entryes]
}

export const deteleEntry = (state, id) => {
   state.entryes = state.entryes.filter(entry => entry.id !== id)
}

export const clearEntries = (state) => {
   state.entryes = []
}




