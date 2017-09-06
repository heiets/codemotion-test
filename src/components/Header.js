import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <Link to="/" className="navbar-brand">Invoice App</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/products">Products</Link></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Invoices</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
export default Header;