import React, {Component} from 'react';
import './QbLayout.css'
import QbHeader from '../QbHeader';
import QbFooter from '../QbFooter';

class QbLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let logo = this.props.route && this.props.route.logo;

        return (
            <div className="layout-ct">
                <QbHeader></QbHeader>
                <div className="body-content">
                    {this.props.children}
                </div>

                <QbFooter logo={logo}></QbFooter>
            </div>
        );
    }
}

export default QbLayout;
