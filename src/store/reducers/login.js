const INITIAL_STATE = {
  username: null,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN_SUCCES':
      return {
        ...state,
        username: action.payload.username,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
