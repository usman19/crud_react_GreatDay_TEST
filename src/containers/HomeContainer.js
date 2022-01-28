import React, { Component } from 'react';
import  TabelComp  from '../components/TabelComp';
import { connect } from "react-redux";
import { getUsersList } from '../actions/userAction';

 class HomeContainer extends Component {

    componentDidMount() {
      this.props.dispatch(getUsersList());
    }


  render() {
    return (
    <div>
       <TabelComp />
    </div>
    );
  }
}


export default  connect()(HomeContainer);