/**
 * Created by az on 2017/7/16.
 */
import React, {Component} from 'react';

export default class QbModalFooter extends Component {
    render() {
        const {style} = this.props;
        return (
            <div className="modal-footer" style={style}>
                {this.props.children}
            </div>
        )
    }
}