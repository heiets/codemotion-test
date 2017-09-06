import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import * as actions from '../Products/actions';
import selectors from '../Products/selectors';

class Products extends Component {
    constructor(props) {
        super(props);
        const {
            fetchProducts
        } = this.props;
        fetchProducts();
    }
    render() {
        const { productsList } = this.props;
        const productsToShow = Object.keys(productsList).map((keys, index) => (
            <div key={`product__${index}`}>
                {
                    <div>{productsList[keys].id}</div>
                }
            </div>
        ));
        return (
            <div>
                <Header />
                <div className="main__wrap">
                    {
                        productsToShow.length === 0
                            ?
                            <div style={{'textAlign': 'center'}}>No items here. Create one!</div>
                            :
                            <div>
                                { productsToShow }
                            </div>
                    }
                </div>
            </div>
        )
    }
}
export default connect(selectors, actions)(Products);
