/**
 * Created by az on 2017/7/16.
 */
import React, {Component} from 'react';

export default class QbModalHeader extends Component {
    render() {
        const {style} = this.props;
        return (
            <div className="modal-body" style={style}>
                {this.props.children}
            </div>
        )
    }
}