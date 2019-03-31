import React, { Component } from 'react';
import {Header } from './components/Header';

import {userService } from '../services/UserService';
import { Footer } from './components/Footer';
import {Main} from "./components/Main"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      users: [],
    }
  }
  componentDidMount() {
    userService.fetchUsers()
      .then((users) => {
        this.setState({users});
        
      });
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Main users={this.state.users} key/>
      <Footer />
      </div>
    );
  }
}

export default App;
