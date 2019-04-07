import React, { Component } from 'react'
import { Card, CardHeader, CardFooter, CardBody, CardText, CardImg } from 'reactstrap';
import axios from 'axios'
import './productView.css'
import appdata from '../../constant'

import Navbar from '../navbar'
import Loder from '../loder/loder'

class ProductView extends Component {
	constructor() {
		super()
		this.state = {
			pid: '',
			productdata: null,
			backgroundImage: `url(${appdata.url})`,
			backgroundPosition: '0% 0%',
			cartupdate: "not Updated",
			quntity: '1kg',
			cost:null
		}
		// alert("constructor")
		// alert(localStorage.getItem("prd"))
		this.state.pid = localStorage.getItem("prd")
		this.getProductDetails()
		this.radioChange = this.radioChange.bind(this);
	}
	componentDidMount() {

	}
	getProductDetails() {
		// alert(this.state.uid)
		axios.post('productView/productDetails', { _id: this.state.pid }).then(res => {
			//alert(res.data)
			//console.log(res.data)
			var data = res.data
			this.setState({
				productdata: data[0],
				cost:data[0].cost
			}, () => {
				//alert(this.state.productdata)
				//console.log(this.state.productdata)
				//src=this.state.productdata.url;
				//alert(this.src)

			})
		})
	}
	//======ZOOM======
	handleMouseMove = e => {
		const { left, top, width, height } = e.target.getBoundingClientRect()
		const x = (e.pageX - left) / width * 100
		const y = (e.pageY - top) / height * 100
		this.setState({ backgroundPosition: `${x}% ${y}%` })
	}
	//================cart=======================
	addToCart(cartData) {
		var cartdt=cartData;
		var cart
		cartdt.quntity=this.state.quntity;
		cartdt.cost=this.state.cost;
		if (localStorage.getItem("cart")) {
			cart = JSON.parse(localStorage.getItem("cart"));
			console.log(cart)
			cart.push(cartdt)
			localStorage.setItem("cart", JSON.stringify(cart));
			console.log(cart)

		} else {
			cart = [cartdt]
			localStorage.setItem("cart", JSON.stringify(cart))
		}
	}
	radioChange(e) {
		if(e.currentTarget.value=="1kg"){
			var cost = this.state.productdata.cost;
			this.setState({
				quntity: e.currentTarget.value,
				cost:cost
			  });
		}
		if(e.currentTarget.value=="500 gm"){
			var cost = this.state.productdata.cost/2;
			this.setState({
				quntity: e.currentTarget.value,
				cost:cost
			  });
		}
		if(e.currentTarget.value=="250 gm"){
			var cost = this.state.productdata.cost/4;
			this.setState({
				quntity: e.currentTarget.value,
				cost:cost
			  });
		}

	  }
	render() {
		if (this.state.productdata) {
			return (
				<div>
					{/* <Navbar /> */}
					<div class="container-fluid">
						<div class="row">
							<div class="col-sm-0 col-lg-2"></div>
							<div class="col-sm-12 col-lg-8">
								<div class="card text-center mt-2">
									<div class="card-header" style={{ paddingBottom: ".8rem" }}>
										{this.state.productdata.name}
									</div>
									<div class="card-body" style={{ padding: '0' }}>
										<div class="row">
											<div class="col-sm-12 col-lg-6 card-body-left " style={{ padding: "1rem" }}>
												<figure onMouseMove={this.handleMouseMove} style={this.state}>
													<img src={appdata.url} />
												</figure>
												{/* <img src={this.state.productdata.url} class="img-thumbnail" alt="Cinque Terre"/> */}
											</div>
											<div class="col-sm-12 col-lg-6" style={{ padding: "1rem" }}>
												{/* <h5 class="card-title">{this.state.productdata.name}</h5>
												<p class="card-text">{this.state.productdata.description}</p>
												<a href="#" class="btn btn-primary">Go somewhere</a> */}
												<h5 class="card-title">Size</h5>
												<div class="form-check">
													<label class="form-check-label" for="radio1">
													<input type="radio" value="1kg" checked={this.state.quntity === "1kg"}
													onChange={this.radioChange} /> 1Kg - {this.state.productdata.cost}
            										 </label>
												</div>
												<div class="form-check">
													<label class="form-check-label" for="radio2">
													<input type="radio" value="500 gm" checked={this.state.quntity === "500 gm"}
													onChange={this.radioChange} /> 500 gm - {this.state.productdata.cost/2}
            										 </label>
												</div>
												<div class="form-check">
													<label class="form-check-label" for="radio3">
													<input type="radio" value="250 gm" checked={this.state.quntity === "250 gm"}
													onChange={this.radioChange} /> 250 gm - {this.state.productdata.cost/4}
            										 </label>
												</div>
											</div>
										</div>
									</div>
									<div class="card-footer text-muted">
									<p class='float-left'>{this.state.cost} - {this.state.quntity}</p>
										<button class='float-right btn btn-lg btn-primary' onClick={() => { this.addToCart(this.state.productdata) }}>Add To Cart</button>
									</div>
								</div>
							</div>
							<div class="col-sm-0 col-lg-2"></div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					{/* <Navbar /> */}
					<Loder />
				</div>
			)
		}
	}
}
export default ProductView