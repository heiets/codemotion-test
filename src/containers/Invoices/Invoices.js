import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from '../../components/Header';
import * as actions from '../Invoices/actions';
import selectors from '../Invoices/selectors';

class Invoices extends Component {
    constructor(props) {
        super(props);
        const {
            fetchInvoices
        } = this.props;
        fetchInvoices();
    }
    render() {
        const { invoicesList } = this.props;
        const invoicesToShow = Object.keys(invoicesList).map((keys, index) => (
            <tr key={`invoice__${index}`}>
                <td>{invoicesList[keys].id}</td>
                <td>{invoicesList[keys].customer_id}</td>
                <td>{invoicesList[keys].discount}</td>
                <td>{invoicesList[keys].total} $</td>
            </tr>
        ));
        return (
            <div>
                <Header />
                <div className="main__wrap">
                    {
                        invoicesToShow.length === 0
                            ?
                            <div style={{'textAlign': 'center'}}>No items here. <Link to="/create-invoice">Create</Link> one!</div>
                            :
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Customer id</th>
                                    <th>Discount</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                  { invoicesToShow }
                                </tbody>
                            </table>
                        }
                </div>
            </div>
        )
    }
}
export default connect(selectors, actions)(Invoices);
