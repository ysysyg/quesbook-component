import React, {Component} from 'react';
import './QbFooter.scss';

class QbFooter extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/help">Help</a>
                    </li>
                    <li>
                        <a href="mailto:help@quesbook.com?Subject=Help!">Contact us!</a>
                    </li>
                    <li className='logo'>
                        <img src={this.props.logo} alt=""/>
                    </li>
                    <li>
                        <a href="/help">Terms of use</a>
                    </li>
                    <li className='copy-right'>
                        &copy; {new Date().getFullYear()} Quesbook USA, Inc.
                    </li>
                </ul>
            </footer>
        );
    }
}

export default QbFooter;
