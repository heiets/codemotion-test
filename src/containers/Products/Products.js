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
    addProduct = (e) => {
        e.preventDefault();
        const {
            productsFormFields,
            addProduct
        } = this.props;
        const dataToPost ={
            "name": productsFormFields.name,
            "price": +productsFormFields.price
        };
        addProduct(dataToPost);
    };
    edit = field => e => {
        const {
            editField
        } = this.props;
        editField(field, e.target.value);
    };
    render() {
        const {
            productsList,
            productsFormFields
        } = this.props;
        const productsToShow = Object.keys(productsList).map((keys, index) => (
            <tr key={`product__${index}`}>
                <td>{productsList[keys].id}</td>
                <td>{productsList[keys].name}</td>
                <td>{productsList[keys].price}</td>
            </tr>
        ));
        return (
            <div>
                <Header />
                <div className="main__wrap">
                    <div className="product__add__form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" onChange={this.edit('name')} value={productsFormFields.name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input type="number" className="form-control" id="price" placeholder="Price" onChange={this.edit('price')} value={productsFormFields.price}/>
                            </div>
                            <button className="btn btn-success" onClick={this.addProduct}>Add</button>
                        </form>
                    </div>
                    {
                        productsToShow.length === 0
                            ?
                            <div style={{'textAlign': 'center'}}>No items here. Create one!</div>
                            :
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                  { productsToShow }
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        )
    }
}
export default connect(selectors, actions)(Products);
