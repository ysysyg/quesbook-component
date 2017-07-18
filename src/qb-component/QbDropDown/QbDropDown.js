/**
 * Created by az on 2017/7/17.
 */
import React, {Component} from 'react';
import QbButton from '../QbButton'

/*eslint-disable*/
class QbDropDown extends Component {
    render() {
        const {className, id, size, btnStyle, btnClassName, label} = this.props;
        let btnTheme = btnClassName?btnClassName:'btn-secondary';
        let btnClass = "btn dropdown-toggle "+ btnTheme;
        let modalClass = "dropdown "+ className;
        let btnSize = size?size:'default';
        let height;
        let fontSize;
        let margin;
        switch (btnSize) {
            case 'small':
                height = 30;
                fontSize = 16;
                margin = '7px 20px';
                break;
            case 'default':
                height = 38;
                fontSize = 21;
                margin = '9px 26px';
                break;
            case 'large':
                height = 52;
                fontSize = 25;
                margin = '13px 36px';
                break;
            case 'blockLarge':
                height = 52;
                fontSize = 25;
                margin = '13px 62px';
                break;
        }
        return (
            <div className={modalClass}>
                <button type="button"
                        id={id}
                        className={btnClass}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false" style={{...btnStyle, ...style.button, height, fontSize}}>
                    {label}
                </button>
                <div className="dropdown-menu" aria-labelledby={id}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const style = {
    button: {
        borderRadius: 50,
        border: 0,
    }
};

export default QbDropDown;
