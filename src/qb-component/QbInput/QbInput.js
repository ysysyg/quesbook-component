/**
 * Created by az on 2017/7/12.
 */
import React, {Component} from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';

/*eslint-disable*/
class QbInput extends Component {
    static propTypes = {
        placeHolder: React.PropTypes.string,
        className: React.PropTypes.string,
        size: React.PropTypes.string,
        style: React.PropTypes.object,
        changeHandler: React.PropTypes.func,
    };
    render() {
        const {placeHolder, className, size, style, changeHandler} = this.props;
        let height = 38;
        switch (size) {
            case 'small':
                height = 32;
                break;
            case 'default':
                height = 38;
                break;
            case 'large':
                height = 51;
                break;
        }
        return (
            <div>
                <FormControl type='text'
                             className={className}
                             placeholder={placeHolder}
                             onChange={(e)=> {
                                 changeHandler.bind(this)(e);
                             }}
                             style={{...style, ...privateStyle.input, height}}/>
            </div>
        );
    }
}

const privateStyle = {
    input: {
    }
};

export default QbInput;