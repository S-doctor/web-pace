const initUserInfo = {
  name: "admin",
  role: "admin",
  avatar: "",
  token: "58588"
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case 'USER_SET_USER_TOKEN':
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
}