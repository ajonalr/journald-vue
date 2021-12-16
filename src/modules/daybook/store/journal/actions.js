import journalApi from '@/api/journalApi'

export const getEntries = async ({ commit }) => {

   const {data} = await journalApi.get('/entrys.json')
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

   await journalApi.put(`/entrys/${entry.id}.json`, dateToSave )

   // commit de una mutacion -> updateEntr
   commit('updateEsntry', {...entry})

}


export const createEntry = async (/*{ commit }*/) => {

}