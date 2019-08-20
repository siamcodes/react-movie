import React, { Component } from 'react';
import './Products.css';
import ProductItems from './ProductItems';
import Filter from './Filter';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], filteredProducts: [] };
        this.handleChangeSort = this.handleChangeSort.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
    }

    componentWillMount() {
        fetch("http://localhost:8000/products").then(res => res.json())
            .then(data => this.setState({
                products: data,
                filteredProducts: data
            }));
    }

    handleChangeSort(e) {
        this.setState({ sort: e.target.value });
        this.listProducts();
    }

    handleChangeSize(e) {
        this.setState({ size: e.target.value });
        this.listProducts();
    }

    listProducts() {
        this.setState(state => {
            if (state.sort !== '') {
                state.products.sort((a, b) => (state.sort === 'lowest') ?
                    (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
            } else {
                state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
            }

            if (state.size !== '') {
                return {
                    filteredProducts: state.products.filter(a =>
                        a.availableSizes.indexOf(state.size.toUpperCase()) >= 0)
                };
            }

            return { filteredProducts: state.products };
        })
    }

    render() {
        return (
            <div>
                <h2> Products </h2>
                <Filter size={this.state.size} sort={this.state.sort}
                    handleChangeSize={this.handleChangeSize}
                    handleChangeSort={this.handleChangeSort}
                    count={this.state.filteredProducts.length}
                />
                <hr/>
                <ProductItems products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />

            </div>
        )
    }
}
export default Products;