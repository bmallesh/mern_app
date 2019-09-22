import React, { Component } from 'react'
// import { Card, CardHeader, CardFooter, CardBody, CardText, CardImg } from 'reactstrap';
import axios from 'axios'
import './productView.css'
import appdata from '../../constant'

import {connect} from 'react-redux'
import { ADD } from '../../actions/cartActions'

// import Navbar from '../navbar'
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
			cost:null,
			maincost:null,
			disabled:false
		}
		// alert("constructor")
		// alert(localStorage.getItem("prd"))
		this.state.pid = localStorage.getItem("prd")
		this.getProductDetails()
		this.buttonDisable()
		this.radioChange = this.radioChange.bind(this);
	}
	componentDidMount() {
		// this.buttonDisable;
	}
	getProductDetails() {
		//  alert(this.state.pid)
		axios.post('productView/productDetails', { _id: this.state.pid }).then(res => {
			//alert(res.data)
			console.log(res.data)
			var data = res.data
			this.setState({
				productdata: data[0],
				cost:data[0].cost,
				maincost:data[0].cost
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
			cart.forEach((element,index) => {
				if(element._id==cartdt._id){
					cart.splice(index,1,cartdt)
				}else{
					if(cart.length==index + 1){
						cart.push(cartdt)
						this.props.addCart()
					}
				}
			});
			localStorage.setItem("cart", JSON.stringify(cart));
			console.log(cart)

		} else {
			this.props.addCart()
			cart = [cartdt]
			localStorage.setItem("cart", JSON.stringify(cart))
		}
		this.setState({
			disabled:true
		})
	}
	radioChange(e) {
		if(e.currentTarget.value=="1kg"){
			 cost = this.state.maincost;
			this.setState({
				quntity: e.currentTarget.value,
				cost:cost,
				disabled:false
			  });
		}
		if(e.currentTarget.value=="500 gm"){
			var cost = this.state.maincost/2;
			this.setState({
				quntity: e.currentTarget.value,
				cost:cost,
				disabled:false
			  });
		}
		if(e.currentTarget.value=="250 gm"){
			var cost = this.state.maincost/4;
			this.setState({
				quntity: e.currentTarget.value,
				cost:cost,
				disabled:false
			  });
		}
	  }
	  //===============disabled============
	  buttonDisable(){
		if(localStorage.getItem("cart")){
			var cart = JSON.parse(localStorage.getItem("cart"));
			cart.forEach(element => {
				if(element._id===this.state.pid){
					this.state.disabled=true;
					this.state.cost=element.cost;
					this.state.quntity=element.quntity;
				}
			});
		}
	  }

	render() {
		if (this.state.productdata) {
			return (
				<div>
					{/* <Navbar /> */}
					<div className="container-fluid">
						<div className="row productViewcard">
							<div className="col-sm-0 col-lg-3"></div>
							<div className="col-sm-12 col-lg-6">
								<div className="card text-center mt-2">
									<div className="card-header" style={{ paddingBottom: ".8rem" }}>
										{this.state.productdata.name}
									</div>
									<div className="card-body" style={{ padding: '0' }}>
										<div className="row">
											<div className="col-sm-12 col-lg-6 card-body-left " style={{ padding: "1rem" }}>
												<figure onMouseMove={this.handleMouseMove} style={this.state}>
													<img src={appdata.url} />
												</figure>
												{/* <img src={this.state.productdata.url} className="img-thumbnail" alt="Cinque Terre"/> */}
											</div>
											<div className="col-sm-12 col-lg-6" style={{ padding: "1rem" }}>
												{/* <h5 className="card-title">{this.state.productdata.name}</h5>
												<p className="card-text">{this.state.productdata.description}</p>
												<a href="#" className="btn btn-primary">Go somewhere</a> */}
												<h5 className="card-title">Size</h5>
												<div className="form-check">
													<label className="form-check-label">
													<input type="radio" value="1kg" checked={this.state.quntity === "1kg"}
													onChange={this.radioChange} /> 1Kg - {this.state.maincost}
            										 </label>
												</div>
												<div className="form-check">
													<label className="form-check-label">
													<input type="radio" value="500 gm" checked={this.state.quntity === "500 gm"}
													onChange={this.radioChange} /> 500 gm - {this.state.maincost/2}
            										 </label>
												</div>
												<div className="form-check">
													<label className="form-check-label">
													<input type="radio" value="250 gm" checked={this.state.quntity === "250 gm"}
													onChange={this.radioChange} /> 250 gm - {this.state.maincost/4}
            										 </label>
												</div>
											</div>
										</div>
									</div>
									<div className="card-footer text-muted">
									<p className='float-left'>{this.state.cost} - {this.state.quntity}</p>
										<button className='float-right btn btn-lg btn-primary'disabled={this.state.disabled} onClick={() => { this.addToCart(this.state.productdata) }}>Add To Cart</button>
									</div>
								</div>
							</div>
							<div className="col-sm-0 col-lg-2"></div>
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

const mapStateToProps =(state) =>{
    return{
      user: state.user,
      cartItem: state.cartItem
    }
  }
  const mapDispatchToProps =(dispatch) =>{
    return{
      addCart:()=>{
        dispatch(ADD())
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProductView)
// export default ProductView