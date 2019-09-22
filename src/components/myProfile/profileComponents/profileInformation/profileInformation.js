import React, {Component} from 'react'
import './profileInformation.css'
import {connect} from 'react-redux'
import axios from 'axios'

class ProfileInformation extends Component{
constructor(props){
    super(props)
    this.state={
        firstname:'',
        lastname:'',
        gender:'',
        username:'',
        mobileNo:'',
        personalInfoEdit:false,
        emailInfoEdit:false,
        mobileInfoEdit:false
    }
    this.handleChange=this.handleChange.bind(this)

}
handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
}
componentDidMount(){
    setTimeout(()=>{
        this.setState({
            firstname:this.props.user.firstname,
            lastname:this.props.user.lastname,
            username:this.props.user.username,
            mobileNo:this.props.user.mobileNo,
            gender:this.props.user.gender
        })
        // console.log(this.state)
        // console.log(this.props.user)
    },3000)
}
handleClick(gender){
    if(gender === 'male'){
        this.setState({
            gender : 'male'
        })
    }else{
        this.setState({
            gender : 'female'
        })
    }
}

Edit(name){
    switch(name){
        case 'personalInfoEdit':{
            this.setState({
                personalInfoEdit:true
            },()=>console.log(name))
            break;
        }    
        case 'emailInfoEdit':{
            this.setState({
                emailInfoEdit:true
            })
            break;
        }
        case 'mobileInfoEdit':{
            this.setState({
                mobileInfoEdit:true
            })
            break;
        }
        default:break;
    }
}
Cancel(name){
    switch(name){
        case 'personalInfoEdit':{
            this.setState({
                personalInfoEdit:false,
                firstname:this.props.user.firstname,
                lastname:this.props.user.lastname,
                gender:this.props.user.gender
            })
            break;
        }
        case 'emailInfoEdit':{
            this.setState({
                emailInfoEdit:false,
                username:this.props.user.username,
            })
            break;
        }
        case 'mobileInfoEdit':{
            this.setState({
                mobileInfoEdit:false,
                mobileNo:this.props.user.mobileNo,
            })
            break;
        }
        default:break;
    }
}
Save(name){
    this.props.userInfoStore(this.state);
    console.log(this.state)
    switch(name){
        case 'personalInfoEdit':{
            this.setState({
                personalInfoEdit:false,
            })
            let data={firstname:this.state.firstname,lastname:this.state.lastname,gender:this.state.gender,username:this.state.username}
            axios.post("/profile/personalInfoUpdate",data).then(response=>{
                console.log(response)
            })
            break;
        }
        case 'emailInfoEdit':{
            this.setState({
                emailInfoEdit:false,
            })
            break;
        }
        case 'mobileInfoEdit':{
            this.setState({
                mobileInfoEdit:false,
            })
            break;
        }
        default:break;
    }
}
    render(){
        return(
            <div className='info-main-div'>
                <div className='pb-4'>
                    <div className='pb-3'>
                        <span className='info-span'>Personal Information</span>
                        {!this.state.personalInfoEdit ? (
                            <span className='edit-span' onClick={()=>this.Edit('personalInfoEdit')}>Edit</span>
                        ):(
                            <span className='edit-span' onClick={()=>this.Cancel('personalInfoEdit')}>Cancel</span>
                        )}
                    </div>
                    <div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <input type="text" className="form-control" placeholder="First Name" name="firstname" value={this.state.firstname} disabled = {!this.state.personalInfoEdit} onChange={this.handleChange}/>
                        </div>
                        <div className='col-md-4'>
                            <input type="text" className="form-control" placeholder="Last Name" name="lastname" value={this.state.lastname} disabled = {!this.state.personalInfoEdit} onChange={this.handleChange}/>
                        </div>
                            {this.state.personalInfoEdit ? (
                                <div className='col-md-4'>
                                    <button className='btn btn-svae' onClick={()=>this.Save('personalInfoEdit')}>Save</button>
                                </div>
                            ) : (
                                <div></div>
                        )}
                    </div>
                    <div>
                        <div className='pt-3'>
                            Your Gender
                        </div>
                        <div className='pt-1'>
                            <div className="form-check">
                                <label className="form-check-label pr-5">
                                 <input type="radio" className="form-check-input color-change" name="gender" value={this.state.gender} 
                                    checked={this.state.gender === 'male'}
                                    disabled = {!this.state.personalInfoEdit} onClick={()=>this.handleClick("male")}/>Male
                                </label>
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input color-change" name="gender" value={this.state.gender} 
                                        checked={this.state.gender === 'female'}
                                        disabled = {!this.state.personalInfoEdit} onClick={()=>this.handleClick("female")}/>Female
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='pb-4'>     
                    <div className='pb-3'>
                    <span className='info-span'>Email Address</span>
                        {!this.state.emailInfoEdit ? (
                            <span className='edit-span' onClick={()=>this.Edit('emailInfoEdit')}>Edit</span>
                        ):(
                            <span className='edit-span' onClick={()=>this.Cancel('emailInfoEdit')}>Cancel</span>
                        )}
                    </div>
                    <div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <input type="text" className="form-control" placeholder="Entter Email" name="username" value={this.state.username} disabled = {!this.state.emailInfoEdit} onChange={this.handleChange}/>
                            </div>
                            {this.state.emailInfoEdit ? (
                                <div className='col-md-4'>
                                    <button className='btn btn-svae'>Save</button>
                                </div>
                            ) : (
                                <div></div>
                            )}
                    </div>
                    </div>
                </div>
                <div className='pb-4'>    
                    <div className='pb-3'>
                    <span className='info-span'>Mobile Number</span>
                        {!this.state.mobileInfoEdit ? (
                            <span className='edit-span' onClick={()=>this.Edit('mobileInfoEdit')}>Edit</span>
                        ):(
                            <span className='edit-span' onClick={()=>this.Cancel('mobileInfoEdit')}>Cancel</span>
                        )}
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                        <input type="text" className="form-control" placeholder="Enter Mobile.No" name="mobileNo" value={this.state.mobileNo} disabled = {!this.state.mobileInfoEdit} onChange={this.handleChange}/>
                        </div>
                        {this.state.mobileInfoEdit ? (
                        <div className='col-md-4'>
                            <button className='btn btn-svae'>Save</button>
                        </div>
                        ):(<div></div>)}

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
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProfileInformation)
// export default ProfileInformation;