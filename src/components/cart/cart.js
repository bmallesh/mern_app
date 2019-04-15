import React, {Component} from 'react'

import appdata from '../../constant'
import './cart.css'

class Cart extends Component{
    constructor(){
        super()
        this.state={
            data : appdata.cart
        }
    }
    removeitem(id){ 
        appdata.removeitem(id)
        this.setState({
            data:appdata.cart
        })
    }


    render(){
        return(
            <table class="table ">
            <thead><h6>My Cart ({this.state.data.length})</h6></thead>
            <tbody>
            {this.state.data.map((item,i)=>{
                return(
                    <tr>
                    <td><img className="cartImage" src={item.url}  /></td>
                    <td style={{verticalAlign:"middle"}}>{item.name}</td>
                    <td style={{verticalAlign:"middle"}}>{item.cost}</td>
                    <td style={{verticalAlign:"middle"}}>{item.quntity}</td>
                    <td style={{verticalAlign:"middle"}}><i class='fas fa-trash-alt iconTrash'onClick={()=>{this.removeitem(i)}}></i></td> 
                  </tr>
                )
            })}
            </tbody>
            </table>
        )
    }
}
export default Cart;