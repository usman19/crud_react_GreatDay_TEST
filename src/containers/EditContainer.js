import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BackComp } from '../components/BackComp';

export default class EditContainer extends Component {
  render() {
    return (
        <Container>
          <hr />
          <BackComp />
          <hr />
        </Container>
    );
  }
}
