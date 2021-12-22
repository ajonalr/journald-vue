import journalApi from '@/api/journalApi'

export const getEntries = async ({ commit }) => {

   const { data } = await journalApi.get('/entrys.json')

   if (!data) {
      commit('setEsntries', [])
      return
   }

   const entries = []

   for (let id of Object.keys(data)) {
      entries.push({
         id,
         ...data[id]
      })
   }
   commit('setEsntries', entries)
}


export const undateEntry = async ({ commit }, entry) => {
   // extraer data quitar id
   const { date, text, picture } = entry
   const dateToSave = { date, text, picture }
   // await journalApi.put(paht)
   await journalApi.put(`/entrys/${entry.id}.json`, dateToSave)
   // commit de una mutacion -> updateEntr
   commit('updateEsntry', { ...entry })
}


export const createEntry = async ({ commit }, entry) => {

   const { date, text, picture } = entry
   const dateToSave = { date, text, picture }
   // peticion a la api
   const { data } = await journalApi.post('/entrys.json', dateToSave);
   dateToSave.id = data.name
   commit('adEsntry', dateToSave)
   return data.name

}

export const deleteEntry = async ({ commit }, id) => {


   await journalApi.delete(`/entrys/${id}.json`)

   commit('deteleEntry', id)

}