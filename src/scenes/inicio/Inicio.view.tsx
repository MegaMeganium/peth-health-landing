import React, { Component } from 'react';
import { Gallery } from '../../components';
import { benefits } from '../../commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './inicio.scss';

class Inicio extends Component {
    renderBenefits(benefit: string, index: number) {
        return (
            <div className="item" key={index}>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                <label>{benefit}</label>
            </div>
        )
    }
    render() {
        return (
            <div className="inicio-page-content">
                <Gallery className="gallery-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/image2.jpeg`} alt="error" />
                    <img src={`${process.env.PUBLIC_URL}/assets/image1.png`} alt="error" />
                    <img src={`${process.env.PUBLIC_URL}/assets/image3.jpeg`} alt="error" />
                </Gallery>
                <div className="summary-content">
                    <div className="band">
                        <h4><strong>80%</strong> de las mascotas no logran ser salvados en casos de emergencia</h4>
                    </div>
                    <div className="text-content">
                        <h6 className="title">Beneficios</h6>
                        <div className="list">
                            {
                                benefits.map(this.renderBenefits)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;