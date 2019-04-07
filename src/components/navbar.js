import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link} from 'react-router-dom'
import '../App.css';
import axios from 'axios'
import appdata from '../constant'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            redirectTo: null,
        }
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/app/api/logout').then(response => {
            console.log(response.data)
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
        const username = this.props.userdata.username;

        //console.log('navbar render, props: ')
        //console.log(this.props);
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
                    <Link to="#" className="btn btn-link cartLinkStyles"style={{backgroundColor:"white",borderRadius:"49%"}}>
                                        <span className="">{appdata.cartdata}</span>
                                    </Link>
                        {loggedIn ? (
                            <div>
                                <Link to="#" className="btn btn-link text-secondary">
                                <span className="text-white">{username}</span></Link>
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

export default Navbar