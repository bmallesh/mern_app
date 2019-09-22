import React, {Component} from 'react'
import './panCardInformation.css'

class PanCardInformation extends Component{
constructor(){
    super()

}

    render(){
        return(
            <div className='pan-card-info'>
                <div className='pb-3'>
                    <span className='info-span'>PAN Card Information</span>
                </div>
                <div className='p-2'>
                    <div className='row pb-2'>
                        <div className='col-md-5 col-sm-12'>
                            <input type="text" className="form-control" placeholder=" PAN Card Number" name="panCardNumber" />
                        </div>
                    </div>
                    <div className='row pb-2'>
                        <div className='col-md-5 col-sm-12'>
                            <input type="text" className="form-control" placeholder=" Full Name" name="fullName" />
                        </div>
                    </div>
                    <div className='row pb-2'>
                        <div className='col-md-5 col-sm-12'>
                            <input type="file" className="form-control" placeholder=" Upload PAN Card" name="panCard" />
                        </div>
                    </div>
                    <div className='checkbox-div'>
                        <input type='checkbox'/>
                        <div className='checkbox-p'>
                        I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com.
                         I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.
                        </div>
                    </div>
                    <div className='pt-3'>
                    <input type='button' className='btn btn-upload' value='UPLOAD' />
                    </div>
                    {/* <div className='row pt-3'>
                        <div className='col-md-4 col-sm-5'>
                            <input type='button' className='btn form-control btn-save' value='UPLOAD' />
                        </div>
                    </div> */}
                </div>
            </div>    
        )
    }
}
export default PanCardInformation;