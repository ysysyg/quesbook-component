/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
import Radio from 'react-bootstrap/lib/Radio';

/*eslint-disable*/
class QbRadio extends Component {
    render() {
        const {className, value, changeHandler, style, label, name} = this.props;
        return (
            <div>
                <input type="radio"
                       value={value}
                       style={style}
                       name={name}
                       onChange={(e)=> changeHandler.bind(this)(e)}/>
                {label}
            </div>
        );
    }
}

export default QbRadio;