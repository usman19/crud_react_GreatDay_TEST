import React, { Component } from 'react';
import NavbarComp from './components/NavbarComp';
import  Tampilan  from './components/Tampilan';
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import DetailContainers from './containers/DetailContainers';
import EditContainer from './containers/EditContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default class App extends Component {
 

  render() {
    return (
      <div>
        <NavbarComp />
        <Tampilan  />
        <Router>
          <Routes>  
            <Route path='/'  element = {< HomeContainer />}  />
            <Route path='/create' element={<CreateUserContainer />} />
            <Route path='/detail/:id' element={<DetailContainers />} />
            <Route path='/edit/:id' element={<EditContainer />} />
          </Routes>
        </Router>,
      </div>
    );
  }
}
