/**
 * Created by az on 2017/7/16.
 */
import React, {Component} from 'react';

export default class QbModalHeader extends Component {
    render() {
        return (
            <div className="modal-header">
                {this.props.children}
            </div>
        )
    }
}