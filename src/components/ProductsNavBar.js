import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsNavBar() {
    return (
        <div>
            <Link to="/products">
                <button style={{ margin: '0.5em' }} type="button" className="btn btn-outline-primary">All</button>
            </Link>
            <Link to="/products-cu">
                <button style={{ margin: '0.5em' }} type="button" className="btn btn-outline-primary">Central Unit</button>
            </Link>
            <Link to="/products-screen">
                <button style={{ margin: '0.5em' }} type="button" className="btn btn-outline-primary">Screen</button>
            </Link>
        </div>
    )
}