import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Erro.css';

export class error extends Component {
    static propTypes = {
        error: PropTypes.string
    }

    render() {
        return (
            <>
                <h2>Error</h2>
                <p>{this.props.error}</p>
                <img src="https://cdn.pixabay.com/photo/2016/04/25/18/07/halcyon-1352522_960_720.jpg" alt="un pajaro" />
            </>
        )
    }
}

export default error
