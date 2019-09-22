import React, { Component } from 'react';
// import Navbar from './navbar'
import Product from './product/product'

// import axios from 'axios'
import '../css/home.css'

class Home extends Component {
  constructor() {
    super()

    // this.state = {
    //   loggedIn: false,
    //   username: null
    // }
    // this.getUser = this.getUser.bind(this)
    // this.componentWillMount = this.componentWillMount.bind(this)
    // this.updateUser = this.updateUser.bind(this)
  }


  // componentWillMount() {
  //   this.getUser()
  // }

  // updateUser (userObject) {
  //   this.setState(userObject)
  // }

  // getUser() {
  //   axios.get('/app/api/getUserDetails').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }

  render() {
    return (

      <div>
             {/* <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {this.state.loggedIn &&
          <p className="homediv">Join the party, {this.state.username}!</p>
        } */}
        <div>
          <Product/>
        </div>
      </div>

    )

  }
}

export default Home
