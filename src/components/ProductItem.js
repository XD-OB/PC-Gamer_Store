import React from 'react';
import {Link} from 'react-router-dom';

export default function ProductItem(props) {
    const {product} = props;

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={require('../assets/images/pc' + product.id + '.jpg')} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <hr/>
                <p className="card-text">
                    Price: <b>{product.price}$</b>
                </p>
                <Link to={"/products/" + product.type + "/" + product.id} className="btn btn-primary">Details</Link>
            </div>
        </div>
    )
}