import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-builder-76fba-default-rtdb.firebaseio.com/'
})

export default instance;
