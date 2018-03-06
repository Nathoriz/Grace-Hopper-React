import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        const name = this.props.name;
        return (
            <div className="Header">
                <h1>
                   {name}
                </h1>
            </div>
        )
    }
}

export default Header;