import api from "./api"
const register = FormData => api.post(api.url.signup, FormData)
const registerServices = {
    register
}
export default registerServices