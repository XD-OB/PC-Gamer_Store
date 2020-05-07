import React, { Component } from 'react';
import ProductsNavBar from '../components/ProductsNavBar';
import ProductItem from '../components/ProductItem';
import { getAll } from '../api/productsApi';

class Products extends Component {

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
                <h1>Products</h1>
                <div>
                    <ProductsNavBar />
                    <div className='row'>
                        {
                            this.state.products.map(product =>
                                <div className={'col-4-md'} style={{ margin: '1em' }} key={product.id}>
                                    <ProductItem product={product} />
                                </div>
                            )
                        }
                    </div>
                </div><br />
            </div>
        )
    }
}

export default Products