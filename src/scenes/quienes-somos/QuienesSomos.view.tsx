import React, { Component } from 'react';
import { textQuienesSomos } from '../../commons';

class QuienesSomos extends Component {
    render() {
        return (
            <div className="quienes-somos-content">
                <div className="content">
                <h1 className="main-title">QUIENES SOMOS</h1>
                <div className="sub-content">
                    <p>
                        {textQuienesSomos}
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default QuienesSomos;