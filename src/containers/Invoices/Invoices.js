import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div key={`invoice__${index}`}>
                {
                    <div>{invoicesList[keys].id}</div>
                }
            </div>
        ));
        return (
            <div>
                <Header />
                <div className="main__wrap">
                    {
                        invoicesToShow.length === 0
                            ?
                            <div style={{'textAlign': 'center'}}>No items here. Create one!</div>
                            :
                            <div>
                                { invoicesToShow }
                            </div>
                        }
                </div>
            </div>
        )
    }
}
export default connect(selectors, actions)(Invoices);
