export const getUsers = ( state = [], action) => {
  switch (action) {
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