export const getUsers = ( state = [], action) => {
  switch (action.type) {
    case 'START_GET_USERS':
      return action;
    case 'COMPLETE_GET_USERS':
      return action;
    case 'ERROR_GET-USER':
      return action;
    default:
      return state;
  }
}
export const getUsersById = ( state = [], action) => {
  switch (action.type) {
    case 'START_GET_USERS_BY_ID':
      return action;
    case 'COMPLETE_GET_USERS_BY_ID':
      return action;
    case 'ERROR_GET-USER_BY_ID':
      return action;
    default:
      return state;
  }
}