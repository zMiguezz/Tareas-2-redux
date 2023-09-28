import axios from "axios";

const apiURL ='https:// vast-blue-jaguar-vest.cyclic.cloud/api/users/'

const register = async(userData) => {
    const response = axios.post(API_URL, userData)

    return response.data
}

const authService = {
    register 
}

export default authService  