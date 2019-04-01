import React, { Component } from 'react';
import { Header } from './components/Header';

import { userService } from '../services/UserService';
import { Footer } from './components/Footer';
import { Main } from "./components/Main"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      case: true


    }
  }
  componentDidMount() {
    userService.fetchUsers()
      .then((users) => {
        this.setState({ users });

      });
  }
  onSwitchView = (props) => {

    if (this.state.case) {
      this.setState(
        { case: false }
      )
    } else {
      this.setState({ case: true })
    }
  }


  render() {
    return (
      <div className="App">
        <Header hendler={this.onSwitchView} case={this.state.case} />
        <div className="row">
          <Main users={this.state.users} case={this.state.case} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
