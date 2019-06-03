import React, { Component } from 'react';
import { Gallery } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './inicio.scss';

class Inicio extends Component {
    render() {
        return (
            <div className="inicio-page-content">
            <Gallery>
                <img src={`${process.env.PUBLIC_URL}/assets/image2.jpeg`} alt="error" />
                <img src={`${process.env.PUBLIC_URL}/assets/image1.png`} alt="error" />
                <img src={`${process.env.PUBLIC_URL}/assets/image3.jpeg`} alt="error" />
            </Gallery>
            <div className="band">
                <h4><strong>80%</strong> de las mascotas no logran ser salvados en casos de emergencia</h4>
            </div>
            <div className="text-content">
                <h6 className="title">Beneficios</h6>
                <div className="list">
                    <div className="item">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <label>Benefiio 1</label>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <label>Benefiio 2</label>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Inicio;