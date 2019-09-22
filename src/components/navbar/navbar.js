import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link} from 'react-router-dom'
import './navbar.css';
import '../../App.css'
import axios from 'axios'
import appdata from '../../constant'


import {connect} from 'react-redux'


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectTo: null,
        }
        this.logout = this.logout.bind(this)
        // this.props.Nameset("cognizant")
        console.log(this.props.user)


    }

    componentDidMount(){
        setTimeout(()=>{
            // console.log(this.props.userdata.loggedIn);
            this.props.userInfoStore(this.props.userdata);
            // console.log(this.props.user)
        },3000,)
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(this.props);
        
            // this.props.userInfoStore(this.props.userdata);
        
    }

    // componentWillReceiveProps(newProps) {    
    //     console.log(newProps,'newprops')
    //     if(newProps.user.username != newProps.userdata.username){
    //         console.log(newProps.user.username,'newprops')
    //         console.log(newProps.userdata.username,'newprops')
    //         this.props.userInfoStore(this.props.userdata);
    //     }
         
    //  }
    logout(event) {
        event.preventDefault()
        // console.log('logging out')
        axios.post('/app/api/logout').then(response => {
            // console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
                // this.setState({
                //     redirectTo:'/login'     //navigation issue
                // })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.userdata.loggedIn;
        const username = this.props.userdata.firstname +" "+ this.props.userdata.lastname;
        // console.log(this.props.userdata)
        // console.log(this.props.user.name)
        // console.log(this.props);
        // if(this.props.userdata.loggedIn){
        //     this.props.userInfoStore(this.props.userdata);
        // }
        
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div>
                <header className="navbar App-header" id="nav-container" style={{borderBottom:" .1rem solid"}}>
                    <div className="col-6 text-left">
                        {/* <img src={require('./img/coinbase-logo.png')} alt="" title="" class="logoheight" /> */}

                        <Link to="/" className="btn btn-link text-secondary">
                            <span className="text-white"><h3><strong>{appdata.companyName}</strong></h3></span>
                        </Link>
                    </div>
                    <div className="col-6" >
                    <section className="navbar-section float-right">
                    <Link to="/cart" className="btn btn-link cartLinkStyles"style={{backgroundColor:"white",borderRadius:"49%"}}>
                                        {/* <span className="">{appdata.cartdata}</span> */}
                                        <span>{this.props.cartItem.cart}</span>
                                    </Link>
                        {loggedIn ? (
                            <div>
                                <div className="dropdown">
                                <button className="btn btn-link text-secondary dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="text-white user-name-span" >{username}</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-custum" aria-labelledby="dropdownMenuButton">
                                    <Link to='/myProfile' className="dropdown-item border-bottom">
                                    
                                    <i className="fa fa-user-circle icon-styles"></i> <span className="">My Profile</span>
                                    </Link>
                                    <a className="dropdown-item border-bottom" href="#">
                                    <i className="fa fa-shopping-bag icon-styles"></i>Orders</a>
                                    <a className="dropdown-item border-bottom" href="#">
                                    <i className="fa fa-bell icon-styles"></i>Notifications</a>
                                    <a className="dropdown-item" href="#">
                                        <i className="fa fa-power-off icon-styles"></i>Logout</a>
                                </div>
                                </div>
                                {/* <Link to="#" className="btn btn-link text-secondary"> */}
                                {/* <span className="text-white" >{username}</span></Link> */}
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-white">Logout</span></Link>
                            </div>

                        ) : (
                            <div>
                                    <Link to="/login" className="btn btn-link text-white">
                                        <span className="text-white">Login</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-white">Sign up</span>
                                    </Link>
                                    </div>
                            )}
                             </section>
                    </div>

                </header>
            </div>

        );
                        }

    }
}

const mapStateToProps =(state) =>{
    return{
      user: state.user,
      cartItem: state.cartItem
    }
  }
  const mapDispatchToProps =(dispatch) =>{
    return{
      userInfoStore:(userinfo)=>{
        dispatch({
          type:"initialupdate",
          payload:userinfo
        })
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
// export default Navbar