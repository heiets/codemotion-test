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
            formFields,
            addProduct
        } = this.props;
        const dataToPost ={
            "name": formFields.name,
            "price": +formFields.price
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
            formFields
        } = this.props;
        const productsToShow = Object.keys(productsList).map((keys, index) => (
            <div key={`product__${index}`}>
                {
                    <tr>
                        <td>{productsList[keys].id}</td>
                        <td>{productsList[keys].name}</td>
                        <td>{productsList[keys].price}</td>
                    </tr>
                }
            </div>
        ));
        return (
            <div>
                <Header />
                <div className="main__wrap">
                    <div className="product__add__form">
                        <form>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" onChange={this.edit('name')} value={formFields.name}/>
                            </div>
                            <div className="form-group">
                                <label for="price">Price:</label>
                                <input type="number" className="form-control" id="price" placeholder="Price" onChange={this.edit('price')} value={formFields.price}/>
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
