import React, { Component } from 'react'
import {Link } from 'react-router-dom'  
import appdata from '../../constant'
import './cart.css'

import {connect} from 'react-redux'
import { SUB } from '../../actions/cartActions'

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            data: appdata.cart,
            totalcost:"0",
        }
    }
    removeitem(id) {
        this.props.RemoveCart()
        appdata.removeitem(id)
        this.setState({
            data: appdata.cart
        },()=>{this.totalCast()})
        
    }
    componentWillMount(){
        this.totalCast()
    }

    totalCast(){
        var total=0;
        this.state.data.forEach(element => {
            total = total + element.cost;
        });
        // alert(total)
        this.setState({
            totalcost:total
        })
    }

    placeToOrder(){
        alert(this.props.user.name)
    }


    render() {
        return (
            // <table class="table ">
            // <thead><h6>My Cart ({this.state.data.length})</h6></thead>
            // <tbody>
            // {this.state.data.map((item,i)=>{
            //     return(
            //         <tr>
            //         <td><img className="cartImage" src={item.url}  /></td>
            //         <td style={{verticalAlign:"middle"}}>{item.name}</td>
            //         <td style={{verticalAlign:"middle"}}>{item.cost}</td>
            //         <td style={{verticalAlign:"middle"}}>{item.quntity}</td>
            //         <td style={{verticalAlign:"middle"}}><i class='fas fa-trash-alt iconTrash'onClick={()=>{this.removeitem(i)}}></i></td> 
            //       </tr>
            //     )
            // })}
            // </tbody>
            // </table>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1 col-lg-3"></div>
                    <div className="col-md-10 col-lg-6">
                    <table className="table table-hover  mt-4">
                    <thead>
                        <tr>
                            <td>My Cart ( {this.state.data.length})</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                     {this.state.data.map((item,i)=>{
                         return(
                            <tr className="tablerow" key={i}>
                            <td className="td_pro max-width" style={{verticalAlign:"middle"}}>
                            <img src={item.url} className="img-thumbnail"style={{width:"100%", height:"200px"}} alt="Cinque Terre" />
                            </td>
                            <td className="topright1 td_pro" style={{verticalAlign:"middle"}}>{item.name}</td>
                            <td className="td_pro" style={{verticalAlign:"middle"}}>{item.cost}</td>
                            <td style={{verticalAlign:"middle"}}>{item.quntity}</td>
                            <td className="topright td_pro" style={{verticalAlign:"middle"}}><i className='fas fa-trash-alt iconTrash'onClick={()=>{this.removeitem(i)}}></i></td>
                        </tr>
                         )})}                         
                    </tbody>
                </table>
                {this.state.data.length==0?(
                                 <div>Empt Cart</div>):(
                                    <div>
                                    <table className="table table-price">
                                    <tbody>
                                        <tr className="tablerow3">
                                            <td>Price ({this.state.data.length} items)</td>
                                            <td>{this.state.totalcost}</td>
                                        </tr>
                                        <tr className="tablerow3">
                                            <td>Delivery Charges</td>
                                            <td className='deliveryCharge'>FREE</td>
                                        </tr>
                                        <tr className="tablerow3">
                                            <td>Amount Payable</td>
                                            <td>{this.state.totalcost}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="place-order-div">
                                <Link to="/" className="">
                                    <button type='button' className='btn btn-continu-shopping'>&#x227A;&#x227A; Continu SHopping</button>
                                </Link>
                                <Link to="/" className="">
                                <button type='button' className='btn btn-order-place' onClick={()=>this.placeToOrder()}>Place Order</button>
                                </Link>
                                </div>
                                    </div>
                                 )}

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
      RemoveCart:()=>{
        dispatch(SUB())
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Cart)
// export default Cart;