import api from "./api"
const Login = d => api.post(api.url.login, d)
const loginService = {
    Login
}
export default loginService 