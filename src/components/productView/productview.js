import React, { Component } from 'react'
import { Card, CardHeader, CardFooter, CardBody, CardText, CardImg } from 'reactstrap';
import axios from 'axios'   

import Navbar from '../navbar'

class ProductView extends Component {
	constructor(){
		super()
		this.state={
			pid:''
		}
		this.getProductDetails()
	}

	getProductDetails(){
		this.state.pid = document.URL.split('?');
		this.state.pid = this.state.pid[1].split('=');
		this.state.pid = this.state.pid[1];
		// alert(this.state.uid)
		axios.post('productView/productDetails',{_id:this.state.pid}).then(res=>{
			alert(res.data)
			console.log(res.data)
		})
	}

	render() {
		return (
			<div >
				<Navbar/>
				<Card className='card'>
					<CardHeader>card</CardHeader>
					{/* <CardImg top width="100%" height="300px" src={value.url} alt="Card image cap"/>
                <CardFooter>
                  <p class='float-left'>{value.cost}</p>
                  <button class='float-right btn btn-primary' onClick={()=>this.order(value._id)}>Order</button>
                </CardFooter> */}
				</Card>
			</div>
		)
	}
}
export default ProductView