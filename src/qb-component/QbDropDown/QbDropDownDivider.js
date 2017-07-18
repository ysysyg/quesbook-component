/**
 * Created by az on 2017/7/17.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbDropDownDivider extends Component {
    render() {
        const {className, style} = this.props;
        let c = className?className: '';
        let dividerClass = "dropdown-divider " + c;
        return (
            <div className={dividerClass} style={style}></div>
        )
    }
}

export default QbDropDownDivider;
