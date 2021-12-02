// export const myGetter =  (state) => {

//    return state

// }

export const getEntriesByTerm = (state) => (term = '') => {


   if (term.length === 0) return state.entryes

   return state.entryes.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))


}
export const getEntriesById = ( state) => (id = '') => {

   const entry = state.entryes.find(entry => entry.id === id);

   if (!entry) return

   return {...entry}

}