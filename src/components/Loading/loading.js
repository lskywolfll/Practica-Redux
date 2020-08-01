import React, { Component } from 'react'
import './styles/loading.css';

export default class loading extends Component {
    render() {
        return (
            <div>
                <div class="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}
