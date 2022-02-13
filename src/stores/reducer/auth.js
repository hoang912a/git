import ActionType from "../action";
const initialState = {
  showRegister: false,
  showLogin: false,
  key:'home',
  isLogin: localStorage.getItem("isLogin") || false,
  role: localStorage.getItem("role") || "user",
  token: localStorage.getItem("token") || "",


};

const reducer = (state = initialState, action) => {
  switch (action.type) { 
    case ActionType.SELECTED_KEY:
      return{
        ...state,
        key:action.key
      }
    case ActionType.SHOW_REGISTER:
      return {
        ...state,
        showRegister: true,
      };
    case ActionType.HIDDEN_REGISTER:
      return {
        ...state,
        showRegister: false,
      };
    case ActionType.SHOW_LOGIN:
      return {
        ...state,
        showLogin: true,
      };
    case ActionType.HIDDEN_LOGIN:
      return {
        ...state,
        showLogin: false,
      };
    case ActionType.CHECK_LOGIN:
      localStorage.setItem("isLogin", true)
      localStorage.setItem("token", action.token);
      console.log(action.token);
      localStorage.setItem("role", action.role)
      console.log(action.role)
      return {
        ...state,
        showLogin: false,
        isLogin: true,
        role: action.role,
        token: action.token
      };

    case ActionType.CHECK_LOGOUT:
      console.log('do day')
      localStorage.setItem("isLogin", false)
      localStorage.removeItem("token")
      localStorage.removeItem("role")
      return {
        ...state,
        isLogin:false,
      }
    default:
      return { ...state };

  }
};
export default reducer;
