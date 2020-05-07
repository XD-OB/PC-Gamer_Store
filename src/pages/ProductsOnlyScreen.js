import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';
import { getAll } from '../api/productsApi';
import ProductsNavBar from '../components/ProductsNavBar';

export default class ProductsOnlyScreen extends Component {

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
                <h1>Screens</h1>
                <ProductsNavBar />
                <div className='row'>
                    {
                        this.state.products.map(product =>
                            (product.type === "screen") ?
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