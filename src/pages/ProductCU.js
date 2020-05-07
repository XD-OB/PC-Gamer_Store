import React, { Component } from 'react';
import { getById } from '../api/productsApi';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/actions';
import CUTechDetails from '../components/CUTechDetails';
import RatingStars from '../components/RatingStars';

class ProductCU extends Component {

    state = {
        loading: true,
        quantity: 1,
        product: {}
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if (value >= 0) {
            this.setState({
                quantity: event.target.value
            })
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                    if (product == null) {
                        this.props.history.push('/error');
                        return ;
                    }
                    this.setState({
                        loading: false,
                        product
                    })
                }
            )
    }

    render() {
        if (this.state.loading)
            return (
                <div>Loading...</div>
            )
            
        const product = this.state.product;
        const quantity = this.state.quantity;
            
        if (this.state.product == null)
            this.props.history.push('/error');
        return (
            <div>
                <div className='row'>
                    <div className='col-6'>
                        <img src={require('../assets/images/pc' + product.id + '.jpg')} alt={product.name} width={'100%'} />
                    </div>
                    <div className='col-6'>
                        <h1>{product.name}</h1><br />
                        <h3>{product.price}$</h3><br />
                        <p>"{product.description}"</p><br />
                        <CUTechDetails detail={product.technology} />
                        <RatingStars rating={product.rating} />
                        <div style={{textAlign: 'center'}}>
                            <input type="number" value={quantity} onChange={this.handleQuantity} style={{margin: '2em'}}/>
                            <button className="btn btn-primary" onClick={() => this.props.addToCart(product, quantity)}>
                                Add to Cart
                            </button>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <span style={{fontWeight: 'bold'}}>Total: </span>
                            {quantity * product.price + ' $'}
                        </div>
                    </div>
                </div><br/>
            </div>
        )
    }
}

export default connect(null, {addToCart})(ProductCU)