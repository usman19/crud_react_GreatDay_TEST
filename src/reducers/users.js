import { GET_USERS_LIST, GET_USERS_DETAIL } from '../actions/userAction'


let initialState = {
      getUsersList: false,
      errorUsersList : false,
      getUsersDetail: false,
      errorUsersDetail : false,
      judul: "Hallo, Usman"
};

 const users = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage
      };

      case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage
      };

    default:
      return state      
  }
}

export default users;