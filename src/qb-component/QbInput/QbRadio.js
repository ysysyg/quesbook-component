/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';

/*eslint-disable*/
class QbRadio extends Component {
    render() {
        const {className, value, changeHandler, style, label, name} = this.props;
        return (
            <label className={className}>
                <input type="radio"
                       value={value}
                       style={style}
                       name={name}
                       onChange={(e)=> changeHandler.bind(this)(e)}/>
                {label}
            </label>
        );
    }
}

export default QbRadio;