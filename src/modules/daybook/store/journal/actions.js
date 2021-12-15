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


export const undateEntry = async (/*{ commit }*/) => {

}


export const createEntry = async (/*{ commit }*/) => {

}