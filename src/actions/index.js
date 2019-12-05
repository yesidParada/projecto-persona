import http from './http'

const startGetUsers = () =>{ return { type: 'START_GET_USERS', ready: false }}
const completeGetUsers = (data) =>{ return { type: 'COMPLETE_GET_USERS', data }}
const errorGetUsers = (err) =>{ return { type: 'ERROR_GET_USER', err }}

export const getUsers = () => {
    return ( dispatch, getState ) => {
        dispatch(startGetUsers());
        //TODO Request con axios
        http.get('users/')
          .then((response) =>{
            if(response.data)
              dispatch(completeGetUsers(response.data));
          })
          .catch((err) => {
            dispatch(errorGetUsers(err));
          })
    }
}
