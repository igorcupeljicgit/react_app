import React, { Component } from 'react';
import { Header } from './components/Header';
import "./app.css"
import { userService } from '../services/UserService';
import { Footer } from './components/Footer';
import { Main } from "./components/Main"
import { Loader } from './components/Loader'
// import { Smile } from "./components/NoUserFound"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      usersFilter: [],
      case: true


    }

  }
  componentDidMount() {
    userService.fetchUsers()
      .then((users) => {
        this.setState({
          users: users,
          usersFilter: users
        })


      });
  }
  onSwitchView = (props) => {

    if (this.state.case) {
      this.setState(
        {
          case: false,
        }
      )
    } else {
      this.setState({ case: true })
    }
  }

  filterUsers = (event) => {


    this.setState({
      usersFilter: this.state.users.filter((user) => (user.name.first.indexOf(event.target.value) !== -1))
    })

  }


  render() {
    return (
      <div className="App">
        <Header hendler={this.onSwitchView} filterUsr={this.filterUsers} case={this.state.case} />
        <Loader loaderState={this.state.users} />
        <div className="row">
          {/* <Smile searchEngine={this.filterUsers} condition={this.state.usersFilter} /> */}
          <Main users={this.state.usersFilter} case={this.state.case} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
