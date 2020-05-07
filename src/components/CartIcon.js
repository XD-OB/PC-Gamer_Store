import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "./Cart.css";

function CartIcon(Props) {
    return (
        <div id="cart-icon">
            <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
                {
                    Props.totalQuantity !== 0 ?
                        <span className="badge badge-danger">
                            {Props.totalQuantity}
                        </span>:
                        null
                }
                </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0)
    };
}

export default connect(mapStateToProps)(CartIcon)