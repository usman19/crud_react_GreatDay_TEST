import React from 'react';
import { connect } from "react-redux";



const mapStateToProps = (state) => {
    return {
        getUsersDetail: state.users.getUsersDetail,
        errorUsersDetail : state.users.errorUsersDetail
    };
  };

const DetailUsersComp = (props) => {
  return (
  <div>
      {props.data.length > 0
        ? props.data.map((value) => {
            return (
              <div>
                <h3>
                  Email: {value.email}| 
                  First Name: {value.first_name} | 
                  Last Name: {value.last_name}
                </h3>
                <hr />
              </div>
            );
          })
        : null}
  </div>
  )
}

export default connect(mapStateToProps, null)(DetailUsersComp);