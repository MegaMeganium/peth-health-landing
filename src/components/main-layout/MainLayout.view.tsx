import React, { Component } from 'react';
import NavHeader from '../nav-header';
import './main-layout.scss';

interface IProps {
    children: React.ReactNode;
}

class MainLayout extends Component<IProps> {
    render() {
        return (
            <>
                <header><NavHeader /></header>
                {this.props.children}
                <footer>Powered By: PethHealth</footer>
            </>
        );
    }
}

export default MainLayout;