import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Page } from '../scenes';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={(props) => <Page />} />
                {/* <Route exact path="/quienes-somos" render={(props) => <QuienesSomos />} /> */}
                <Route exact path="/miembros" render={(props) => (
                    <div>
                        <button onClick={() => props.history.push('/test')}>miembros</button>
                    </div>)} />
                <Route path="/error" render={() => <h1>PAGINA NO ENCONTRADA</h1>} />
            </div>
        );
    }
}

export default Routes;