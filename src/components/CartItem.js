import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/actions/actions';
import "./Cart.css";


function CartItem(props) {
    const quantity = props.item.quantity;
    const product = props.item.product;

    return (
        <div className="card" style={{ width: '18rem'}}>
            <img src={require('../assets/images/pc' + product.id + '.jpg')} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <hr />
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td>Price:</td>
                            <td><b>{product.price}$</b></td>
                        </tr>
                        <tr>
                            <td>Quantity:</td>
                            <td><b>{quantity}</b></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td><b>{quantity * product.price}$</b></td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-danger" onClick={() => props.removeFromCart(props.index)}>
                    <i className='fa fa-trash'></i> Delete
                </button>
            </div>
        </div>
    )
}

export default connect(null, {removeFromCart})(CartItem)