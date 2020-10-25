const initState = {
  login: false,
  currentUser: {
    name: "admin",
    password: "123456",
    loginTime: "now",
  }
};

export default function global(state, action) {
  switch(action.type) {
    case "login": {
      return {
        login: true,
        name: action.name,
      }
    }
    case "logout": {
      return {
        login: false,
      }
    }
    default: {
      return initState;
    }
  }
}