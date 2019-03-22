import React, {Component} from 'react'
import {Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, CardDeck,CardImg,CardColumns } from 'reactstrap';
    import { Redirect } from 'react-router-dom'    
import axios from 'axios'    
import './product.css'
import Loder from '../loder/loder'

class Product extends Component{
constructor(){
    super()
    this.state={
        product:'',
        redirectTo: null
    }
    this.getProducts()
}

  getProducts() {
     axios.get('/home/getdata').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      //alert(response.data)
      if(response.data){
        this.setState({
          product:response.data
        })
      }
    })
  }
  
  order(value){
    var url='/productView?prd='+value
    this.setState({redirectTo:url})
  }

    render(){
      if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return(
        <div class='carddiv'>
        <CardColumns>
          {this.state.product.length != 0 ? ( 
             this.state.product.map((value,index)=>{
               return(
                <Card class='card'>
                <CardHeader>{value.name}</CardHeader>
                <CardImg top width="100%" height="300px" src={value.url} alt="Card image cap"/>
                <CardFooter>
                  <p class='float-left'>{value.cost}</p>
                  <button class='float-right btn btn-primary' onClick={()=>this.order(value._id)}>Order</button>
                </CardFooter>
              </Card> 
               )
             })
          ):(
            <Loder/>
          )}
          </CardColumns>
        </div>
    )
    }
    }
}

export default Product