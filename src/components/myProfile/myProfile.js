import React, {Component} from 'react'
import './myProfile.css'
import {connect} from 'react-redux'
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

import ProfileInformation from './profileComponents/profileInformation/profileInformation'
import ManageAddresses from './profileComponents/ManageAddresses/ManageAddresses'
import PanCardInformation from './profileComponents/panCardInformation/panCardInformation'

// PayMents
import PhonePeWallet from './paymentsComponents/phonePeWallet/phonePeWallet'
import GiftCard from './paymentsComponents/giftCard/giftCard'
import SavedCards from './paymentsComponents/savedCards/savedCards'
// My Stuff
import MyRewards from './myStuffComponents/myRewards/myRewards'
import AllNotifications from './myStuffComponents/allNotifications/allNotifications'
import MyWishlist from './myStuffComponents/myWishlist/myWishlist'

class MyProfile extends Component{
constructor(props){
    super(props)
    // console.log(this.props)
    
}

    render(){
      var address = 'address';
        return(
            <div className='profile-div'>
                <div className='container container-div'>
                  <div className='row'>
                    <div className='col-md-3 col-sm-12'>
                      <div className='profile-subdiv user-profile'>
                        <div className='icon-user-div'>
                          <i className="fa fa-user-circle icon-user"></i>
                        </div>
                        <div className='user-name-div'>
                          <div className='user-hello'>Hello,</div>
                          <div className='user-name'>Profile</div>
                        </div>
                      </div>
                      {/* My Orders */}
                      <div className='profile-subdiv user-profile1'>
                        <div>
                          <div className='myOrders-div'>
                          <i className="fa fa-shopping-bag icon-styles"></i>
                          <span className='orders-span hover-color'>MY ORDERS
                          <i className='fas fa-chevron-right'></i>
                          </span>
                          </div>
                        </div>
                        <div className='border-div'></div>
                        {/* ACCOUNT SETTINGS */}
                        <div>
                          <div className='myOrders-div user-profile'>
                            <div><i className="fa fa-user icon-styles"></i></div>
                            <span className='orders-span'>ACCOUNT SETTINGS</span>
                          </div>
                          <div>
                            <div className='account-setting hover-account-settings'> 
                              <NavLink className='Nav-Link' to='/myProfile/' >Personal Information</NavLink>
                            </div>
                            <div className='account-setting hover-account-settings'>
                              <NavLink className='Nav-Link' to='/myProfile/address' >Manage Addresses</NavLink>
                            </div>
                            <div className='account-setting hover-account-settings'>
                            <NavLink className='Nav-Link' to='/myProfile/PanCardInfo' >PAN Card Information</NavLink>
                            </div>
                          </div>
                        </div>
                        <div className='border-div'></div>
                        {/* PAYMENTS */}
                        <div>
                          <div className='myOrders-div user-profile'>
                            <div><i className="fa fa-credit-card icon-styles"></i></div>
                            <span className='orders-span'>PAYMENTS</span>
                          </div>
                          <div>
                            <div className='account-setting hover-account-settings'>
                              <NavLink className='Nav-Link' to='/myProfile/phonePeWallet'>PhonePe Wallet</NavLink>
                            </div>
                            <div className='account-setting hover-account-settings'>
                              <NavLink className='Nav-Link' to='/myProfile/giftCards' >Gift Card</NavLink>
                            </div>
                            <div className='account-setting hover-account-settings'>
                              <NavLink className='Nav-Link' to='/myProfile/savedCards' >Saved Cards</NavLink>
                            </div>
                          </div>
                        </div>
                        <div className='border-div'></div>
                        {/* MY STUFF */}
                        <div>
                          <div className='myOrders-div user-profile'>
                            <div><i className="fa fa-credit-card icon-styles"></i></div>
                            <span className='orders-span'>MY STUFF</span>
                          </div>
                          <div>
                            <div className='account-setting hover-account-settings'>
                              <NavLink className='Nav-Link' to='/myProfile/myRewards'>My Rewards</NavLink>
                            </div>
                            <div className='account-setting hover-account-settings'>
                              <NavLink className='Nav-Link' to='/myProfile/allNotifications'>All Notifications</NavLink>
                            </div>
                            <div className='account-setting hover-account-settings'>
                              <NavLink className='Nav-Link' to='/myProfile/myWishlist'>My Wishlist</NavLink>
                            </div>
                          </div>
                        </div>
                        <div className='border-div'></div>
                        <div className='border-div'></div> 
                        {/*  */}
                        <div>
                        <div className='myOrders-div user-profile'>
                            <div><i className="fa fa-power-off icon-styles"></i></div>
                            <span className='orders-span hover-color'>Logout</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-9 col-sm-12'>
                      <div className='profile-subdiv'>
                        <div className='p-4'>
                        <Route
                              exact path="/myProfile/"
                              component={ProfileInformation} />
                        <Route
                              exact path='/myProfile/address'
                              component={ManageAddresses} />
                        <Route
                              exact path='/myProfile/PanCardInfo'
                              component={PanCardInformation} />
                        <Route
                              exact path='/myProfile/phonePeWallet'
                              component={PhonePeWallet} />
                        <Route
                              exact path='/myProfile/giftCards'
                              component={GiftCard} />
                        <Route
                              exact path='/myProfile/savedCards'
                              component={SavedCards} />
                        <Route
                              exact path='/myProfile/myRewards'
                              component={MyRewards} />
                        <Route
                              exact path='/myProfile/allNotifications'
                              component={AllNotifications} />
                        <Route
                              exact path='/myProfile/myWishlist'
                              component={MyWishlist} />                                                                                                                 
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
             </div>
        )
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
    userInfoStore:(name)=>{
      dispatch({
        type:"initialupdate",
        payload:name
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyProfile)
// export default MyProfile;