import React, { Component } from 'react';
import Navbar from './navbar'
import axios from 'axios'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/app/api/getUserDetails').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    const imageStyle = {
      width: 400
    }
    return (

      <div>
             <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn &&
          <p className="join">Join the party, {this.state.username}!</p>
        }
      </div>

    )

  }
}

export default Home
