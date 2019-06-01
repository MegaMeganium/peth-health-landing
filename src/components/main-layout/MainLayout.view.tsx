import React, { Component } from 'react';
import NavHeader from '../nav-header';

interface IProps {
    children: React.ReactNode;
}

class MainLayout extends Component<IProps> {
    render() {
        return (
            <>
                <header><NavHeader /></header>
                {this.props.children}
            </>
        );
    }
}

export default MainLayout;