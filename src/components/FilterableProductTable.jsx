import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'


class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        )
    }
}

export default FilterableProductTable