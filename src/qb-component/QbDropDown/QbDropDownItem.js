/**
 * Created by az on 2017/7/17.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbDropDownItem extends Component {
    render() {
        const {className, style, href, label} = this.props;
        let c = className?className: '';
        let itemClass = "dropdown-item " + c;
        return (
            <a className={itemClass} href={href} style={style}>{label}</a>
        )
    }
}

export default QbDropDownItem;
