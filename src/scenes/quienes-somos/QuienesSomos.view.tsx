import React, { Component } from 'react';
import { textQuienesSomos } from '../../commons';
import './quienes-somos.scss';

class QuienesSomos extends Component {
    render() {
        return (
            <div className="quienes-somos-content">
                <div className="content row-1">
                    <h1 className="main-title">QUIENES SOMOS</h1>
                    <div className="who-we-are m-border">
                        <p>
                            {textQuienesSomos}
                        </p>
                    </div>
                </div>
                <div className="content row-2">
                    <h1 className="main-title">¿QUIERES SABER MAS SOBRE NUESTRA APP?</h1>
                    <div className="registration m-border">
                        <input placeholder="Nombre" />
                        <input placeholder="Correo electronico" />
                    </div>
                </div>
            </div>
        );
    }
}

export default QuienesSomos;