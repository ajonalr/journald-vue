import axios from "axios";

const journalApi = axios.create({

      baseURL: 'https://vue-journal-a75c0-default-rtdb.firebaseio.com'
     
})

export default journalApi