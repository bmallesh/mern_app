import React, {Component} from 'react'
import './ManageAddresses.css'

class ManageAddresses extends Component{
constructor(props){
    super(props)

}

    render(){
        console.log(this.props);
        return(
            <div className='ManageAddresses'>
                <div className='pb-3'>
                    <span className='info-span'>Manage Addresses</span>
                </div>
                <div className='p-2'>
                    <div className='add-new-address'>
                        <div className='padding-add-address'>
                            <span className='plus-add-span'>+</span>
                            <span className='span-add'>ADD A NEW ADDRESS</span>
                        </div>
                    </div>
                    <div className='add-new-address pt-1'>
                        <div className='padding-add-address'>
                            <div>
                                <span>ADD A NEW ADDRESS</span>
                            </div>
                            <div className='pt-3'>
                                <div className='row pb-1'>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" Name" name="name" />
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" 10-digit mobile number" name="mobileNo" />
                                    </div>
                                    <div className='col-md-2'>
                                    </div>
                                </div>
                                <div className='row pb-1'>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" Pincode" name="pincode" />
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" Locality" name="locality" />
                                    </div>
                                    <div className='col-md-2'>
                                    </div>
                                </div>
                                <div className='row pb-1'>
                                    <div className='col-md-10 col-sm-12'>
                                    <textarea rows="3" cols="50" className="form-control" placeholder=" Address" name="address"/>
                                        {/* <input type="textarea" className="form-control" placeholder=" Address" name="address" /> */}
                                    </div>
                                    <div className='col-md-2'>
                                    </div>
                                </div>
                                <div className='row pb-1'>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder="City/Distict/Town" name="city" />
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder="State" name="state" />
                                    </div>
                                    <div className='col-md-2'>
                                    </div>
                                </div>
                                <div className='row pb-1'>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" LandMark (Optional) " name="landMark" />
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder="Alternate Phone (Optional)" name="phoneNO" />
                                    </div>
                                    <div className='col-md-2'>
                                    </div>
                                </div>
                                <div>
                                    <div className='pt-2'>
                                        Address Type
                                    </div>
                                    <div className='pt-1'>
                                        <div className="form-check">
                                            <label className="form-check-label pr-5">
                                                <input type="radio" className="form-check-input color-change" name="optradio" /> Home
                                            </label>
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input color-change" name="optradio" /> Work
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-md-4 col-sm-5'>
                                        <input type='button' className='btn form-control btn-save' value='Save' />
                                    </div>
                                    <div className='col-md-2 cancel'>
                                    <a className=''>Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='add-new-address'>
                        <div className='padding-add-address'>

                        </div>
                    </div>
                </div>
             </div>
        )
    }
}
export default ManageAddresses;