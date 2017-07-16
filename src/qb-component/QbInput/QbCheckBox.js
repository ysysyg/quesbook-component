/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';

/*eslint-disable*/
class QbCheckBox extends Component {
    render() {
        const {className, value, changeHandler, style, label} = this.props;
        return (
            <div>
                <input type="checkbox"
                       value={value}
                       style={style}
                       onChange={(e)=> changeHandler.bind(this)(e)}/>
                {label}
            </div>
        )
    }
}

export default QbCheckBox;
