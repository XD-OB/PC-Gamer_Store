import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';
import { getAll } from '../api/productsApi';
import ProductsNavBar from '../components/ProductsNavBar';

export default class ProductsOnlyCU extends Component {

    state = {
        products: [],
    }

    componentDidMount() {
        getAll()
            .then(data =>
                this.setState({
                    products: data
                })
            );
    }

    render() {
        return (
            <div>
                <h1>Central Units</h1>
                <ProductsNavBar />
                <div className='row'>
                    {
                        this.state.products.map(product =>
                            (product.type === "centralUnit") ?
                                <div className={'col-4-md'} style={{ margin: '1em' }} key={product.id}>
                                    <ProductItem product={product} />
                                </div> :
                                null
                        )
                    }
                </div>
            </div>
        )
    }
}