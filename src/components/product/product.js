import React, {Component} from 'react'
import {Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, CardDeck,CardImg,CardColumns } from 'reactstrap';
    import { Spinner } from 'reactstrap';
    import { Redirect,Link } from 'react-router-dom'    
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
  
  order(id,url){
    localStorage.setItem("prd",id)
    localStorage.setItem("url",url)
    // var url='/productView'
    // this.setState({redirectTo:url})
  }

    render(){
      if (this.state.product.length != 0) {
        return (
          <div class='carddiv'>
          <CardColumns>
          {this.state.product.map((value,index)=>{
               return(
              <div class='zoom'>
                                <Card class='card'>
                <CardHeader>{value.name}</CardHeader>
                <CardImg top width="100%" height="300px" src={value.url} alt="Card image cap"/>
                <CardFooter style={{paddingBbottom:"2.2rem"}}>
                  <p class='float-left'>{value.cost}</p>
                  <Link to="/productView" className="">
                  <button class='float-right btn btn-primary' onClick={()=>this.order(value._id,value.url)}>Order</button>
                  </Link>
                </CardFooter>
              </Card> 
              </div>
               )
             })}
          </CardColumns>
        </div>
        )
    } else {
      return(
        <div>
        <Loder />
      </div>
      )
    }
    }
}

export default Product