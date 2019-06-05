import React, { Component } from 'react';
import { navItems, INavItems } from '../../commons/index';
import logo from '../../logo.svg';
import './nav-header.scss';

interface IProps /*extends RouteComponentProps*/ { }

class NavHeader extends Component<IProps> {
    renderItem(item: INavItems, index: number) {
        return (
            <div className="item" key={`${index}-nav-item`}>
                <a className={item.className} href={item.path}>{item.text}</a>
            </div>
        );
    }
    render() {
        return (
            <nav className="navigation">
                <div className="header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="items">
                        {
                            navItems.map(this.renderItem)
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavHeader;