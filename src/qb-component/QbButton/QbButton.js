/**
 * Created by az on 2017/7/10.
 */
import React, {Component} from 'react';
/*eslint-disable*/
class QbButton extends Component {
    static propTypes = {
        label: React.PropTypes.string,
        className: React.PropTypes.string,
        size: React.PropTypes.string,
        clickHandler: React.PropTypes.func,
        color: React.PropTypes.string,
        style: React.PropTypes.object,
        fontStyle: React.PropTypes.object,
    };
    constructor(props) {
        super(props);
        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseUpHandler = this.mouseUpHandler.bind(this);
        this.mouseDownHandler = this.mouseDownHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
        this.state = {
            className : props.className?props.className.trim().split(/ +/):[],
        };
    }
    addClass(name) {
        let classNow = this.state.className;
        classNow.push(name);
        this.setState({
            className: classNow
        });
    }
    removeClass(name) {
        console.log('Tag ,', this.state.className.indexOf(name));
        let classNow = this.state.className;
        let index =this.state.className.indexOf(name);
        classNow.splice(index,1);
        this.setState({
            className: classNow
        });
    }
    mouseOverHandler() {
        console.log('Tag hover');
        this.addClass('hover');
    }
    mouseOutHandler() {
        console.log('Tag onMouseOut');
        this.removeClass('hover');
    }
    mouseUpHandler() {
        console.log('Tag mouse up');
        this.removeClass('click');
    }
    mouseDownHandler() {
        console.log('Tag mouse down');
        this.addClass('click');
    }
    render() {
        const {label, size, clickHandler, style, fontStyle} = this.props;
        let height = 38;
        let fontSize = 21;
        let margin = '9px 26px';
        let btnSize = size?size:'default';
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
        let className = '';
        this.state.className.forEach((name)=> {
            className = className +' ' + name;
        });
        return (
            <button onMouseOver={this.mouseOverHandler}
                    onMouseOut={this.mouseOutHandler}
                    onMouseDown={this.mouseDownHandler}
                    onMouseUp={this.mouseUpHandler}
                    onClick={(e)=> clickHandler.bind(this)(e)}
                    className={className}
                    style={{...privateStyle.frame, ...style, height, fontSize, }}>
                <div>
                    {this.props.children}
                </div>
                <div style={{...privateStyle.content, ...fontStyle, margin}}>
                    {label}
                </div>
            </button>
        );
    }
}

const privateStyle = {
    frame: {
        borderRadius: 50,
        border: 0,
        padding: 0,
        lineHeight: 0
    },
    content: {

    }
};

export default QbButton;