import axios from "axios";

const authApi = axios.create({

    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDS7ectW5btkGLrWOTNnRenLvmkxmFvxaU'
    }

})

export default authApi