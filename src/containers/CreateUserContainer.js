import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BackComp } from '../components/BackComp';

export default class CreateUserContainer extends Component {
  render() {
    return (
    <Container>
      <hr />
      <BackComp />
      <hr />
      
     <h1>
       create user
     </h1>

    </Container>
    );
  };
}
