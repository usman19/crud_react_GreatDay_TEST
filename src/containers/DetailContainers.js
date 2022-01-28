import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BackComp } from '../components/BackComp';
import { connect } from "react-redux";
import DetailUsersComp from '../components/DetailUsersComp';
import { getUsersDetail } from '../actions/userAction'

 class DetailContainers extends Component {
  
  componentDidMount() {
    this.props.dispatch(getUsersDetail());
  }

  render() {
    
    return (

      <Container>
        <hr />
          <BackComp />
        <hr />
        <DetailUsersComp />
      </Container>

    );
  }
}

export default connect()(DetailContainers);