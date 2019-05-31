import React, { Component } from 'react'

import appdata from '../../constant'
import './cart.css'

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            data: appdata.cart,
            totalcost:"0",
        }
    }
    removeitem(id) {
        appdata.removeitem(id)
        this.setState({
            data: appdata.cart
        })
    }

    totalCast(){
        var total="0";
        this.state.data.forEach(element => {
            total = total + element.cost;
        });
        alert(total)
        this.setState({
            totalcost:total
        })
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
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                    <table class="table table-hover  mt-4">
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
                            <tr class="tablerow">
                            <td class="td_pro max-width" style={{verticalAlign:"middle"}}>
                            <img src={item.url} class="img-thumbnail"style={{width:"100%", height:"200px"}} alt="Cinque Terre" />
                            </td>
                            <td class="topright1 td_pro" style={{verticalAlign:"middle"}}>{item.name}</td>
                            <td class="td_pro" style={{verticalAlign:"middle"}}>{item.cost}</td>
                            <td style={{verticalAlign:"middle"}}>{item.quntity}</td>
                            <td class="topright td_pro" style={{verticalAlign:"middle"}}><i class='fas fa-trash-alt iconTrash'onClick={()=>{this.removeitem(i)}}></i></td>
                        </tr>
                         )})}
                    </tbody>
                </table>
                <table class="table">
                    <tbody>
                        <tr class="tablerow3">
                            <td>Price ({this.state.data.length} items)</td>
                            <td>{this.state.totalcost}</td>
                        </tr>
                        <tr class="tablerow3">
                            <td>Delivery Charges</td>
                            <td></td>
                        </tr>
                        <tr class="tablerow3">
                            <td>Amount Payable</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;