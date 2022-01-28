import axios from 'axios'

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

export const getUsersList = () => {
    return dispatch => {
        axios.get('https://reqres.in/api/users?page=1')
            .then(function (response) {
                dispatch({
                    type : GET_USERS_LIST,
                    payload: {
                        data: response.data.data,
                        errorMessage: false,
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
}

export const getUsersDetail = (id) => {
   return dispatch => {
       axios.get('https://reqres.in/api/users?page=1'+id)
            .then(function (response) {
                dispatch({
                    type : GET_USERS_DETAIL,
                    payload: {
                        data: response.data.data,
                        errorMessage: false,
                    }
                })
             })
            .catch(function (error) {
                 dispatch({
                     type: GET_USERS_DETAIL,
                    payload: {
                       data: false,
                       errorMessage: error.message,
                    }
                })
            })
     }
}

export const deleteUsers = (id) => {
    return (dispatch) => {
      axios.delete(
           "https://reqres.in/api/users?page=1"+id
        )
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
          
        });
    };
  };
  
  
//   export const deleteDataUser = () => {
//     return (dispatch) => {
//       dispatch({
//         type: GET_USERS_LIST,
//         payload: {
//           data: false,
//           errorMessage: false,
//         },
//       });
  
  
//       dispatch({
//         type: POST_USER_CREATE,
//         payload: {
//           data: false,
//           errorMessage: false,
//         },
//       });
//     };
//   };