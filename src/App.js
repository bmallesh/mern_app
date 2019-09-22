import React, { Component } from 'react';
import axios from 'axios'
import { Route} from 'react-router-dom'

// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/navbar/navbar'
import Home from './components/home'
import forgot from './components/forgotPassword'
import resetPassword from './components/resetPassword'
import ProductView from './components/productView/productview'
import Cart from './components/cart/cart'
import MyProfile from './components/myProfile/myProfile'
import appdata from './constant'
import Loder from './components/loder/loder'

// import {connect} from 'react-redux'
// import { setName } from "./actions/useractions"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      render:false,
      firstname:null,
      lastname:null,
      mobileNo:null,
      gender: '',
    }

    this.getUser = this.getUser.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    // this.getUser()
  }

  componentWillMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject);
    this.getUser();
  }
  getUserInfo(){
    axios.post("/home/getUserInfo",{username:this.state.username}).then(userInfoResponse=>{
      console.log(userInfoResponse)
      if(userInfoResponse.data.length != 0){
        this.setState({
          firstname:userInfoResponse.data[0].firstname,
          lastname:userInfoResponse.data[0].lastname,
          mobileNo:userInfoResponse.data[0].mobileNo,
          gender:userInfoResponse.data[0].gender,
          render:true
        })
      }else{
        this.setState({
          render:true
        })
      }
    })
  }

  getUser() {
    axios.get('/app/api/getUserDetails').then(response => {
      console.log('Get user response: ')
      console.log(response)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        },()=>this.getUserInfo())
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          render:true
        })
      }
    })
  }

  render() {
    if(this.state.render){
      return (
        <div className="App">
          <Navbar updateUser={this.updateUser} userdata={this.state} />
          {/* <p>Name : {this.props.user.name}</p><button onClick={()=>this.props.setName("cognizant")}>Change user</button> */}
          {/* {this.state.loggedIn &&
            <p className="join">Join the party, {this.state.username}!</p>
          } */}
          {/* Routes to different components */}
          <Route
            exact path="/"
            render={() =>
            <Home/>} />
          <Route
            path="/login"
            render={() =>
              <LoginForm
                updateUser={this.updateUser}
              />}
          />
          <Route
            path="/signup"
            render={() =>
              <Signup/>}
          />
          <Route
            exact path="/forgot"
            component={forgot} />
          <Route
            exact path="/resetpwd"
            component={resetPassword} />
          <Route
            exact path="/ProductView"
            component={ProductView} /> 
          <Route
            exact path="/cart"
            component={Cart} />
          {/* <Route
            path="/myProfile"
            render={()=>{
              if(this.state.loggedIn){
                return <MyProfile />
              }else{
                return <LoginForm updateUser={this.updateUser} />
              }
            }}/> */}
            <Route
            path="/myProfile"
            component={MyProfile} />

        </div>
      );
    }else{
      return(<div className='App'>
        <Loder />
      </div>
      );
    }
  }
}

// const mapStateToProps =(state) =>{
//   return{
//     user: state.user,
//     math: state.math
//   }
// }
// const mapDispatchToProps =(dispatch) =>{
//   return{
//     setName:(name)=>{
//       dispatch(setName(name))
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App)
export default App;
