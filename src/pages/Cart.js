import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';
import { clearCart } from '../store/actions/actions';


class Cart extends Component {
    
    placeOrder = () => {
        // send the request to the server
        
        // clear cart
        this.props.clearCart();
        alert('We recieved your order.');
    }

    render() {
        return (
            <div>
                <h1>Cart</h1><br />

                <div className='row'>
                    {this.props.cartItems.map((item, index) =>
                        <div className={'col-3-md'} style={{ margin: '1em' }} key={index}>
                            <CartItem item={item} index={index} />
                        </div>
                    )}
                </div><br />
                <h3 style={{ textAlign: 'center' }}>Total: <b>{this.props.total}$</b></h3><br />
                <button className="btn btn-primary btn-block" onClick={() => this.placeOrder()}>
                    Place Order
            </button><br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total += item.quantity * item.product.price, 0)
    }
}

export default connect(mapStateToProps, {clearCart})(Cart);