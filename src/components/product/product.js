import React, {Component} from 'react'
import {Card, CardHeader, CardFooter,CardImg,CardColumns } from 'reactstrap';
    // import { Spinner } from 'reactstrap';
    import {Link } from 'react-router-dom'    
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

}
componentWillMount(){
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
          <div className='carddiv'>
            <div className=''>
            <div className='row'>
              <div className='col-lg-2'></div>
              <div className='col-md-12 col-lg-8'>
              <CardColumns className='ml-2 mr-2'>
          {this.state.product.map((value,index)=>{
               return(
              <div className='zoom' key={value.id}>
                <Card className='card'>
                <CardHeader>{value.name}</CardHeader>
                <CardImg top width="100%" height="280px" src={value.url} alt="Card image cap"/>
                <CardFooter style={{paddingBbottom:"2.2rem"}}>
                  <p className='float-left'>{value.cost}</p>
                  <Link to="/productView" className="">
                  <button className='float-right btn btn-primary' onClick={()=>this.order(value._id,value.url)}>Order</button>
                  </Link>
                </CardFooter>
              </Card> 
              </div>
               )
             })}
          </CardColumns>
              </div>
            </div>
            </div>
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