import React, {Component} from 'react'
import './savedCards.css'

class SavedCards extends Component{
constructor(){
    super()

}

    render(){
        return(
            <div className='ManageCard'>
                <div className='pb-3'>
                    <span className='info-span'>Manage Saved Cards</span>
                </div>
                <div className='p-2'>
                    <div className='add-new-card'>
                        <div className='padding-add-card'>
                            <span className='plus-add-span'>+</span>
                            <span className='span-add'>ADD A NEW CARD</span>
                        </div>
                    </div>
                    <div className='add-new-card pt-1'>
                        <div className='padding-add-card'>
                            <div>
                                <span>ADD A NEW CARD</span>
                            </div>
                            <div className='pt-3'>
                                <div className='row pb-1'>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" Enter Card Number" name="cardNumber" />
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" 10-digit mobile number" name="mobileNo" />
                                    </div>
                                    <div className='col-md-2'>
                                    </div>
                                </div>
                                <div className='row pb-1'>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" Name on Card" name="cardName" />
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <input type="text" className="form-control" placeholder=" Locality" name="locality" />
                                    </div>
                                    <div className='col-md-2'>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-md-4 col-sm-5'>
                                        <input type='button' className='btn form-control btn-save' value='SAVE THIS CARD' />
                                    </div>
                                    <div className='col-md-2 cancel'>
                                    <a className=''>Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='add-new-card'>
                        <div className='padding-add-card'>

                        </div>
                    </div>
                </div>
             </div>
        )
    }
}
export default SavedCards;