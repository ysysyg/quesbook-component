/**
 * Created by az on 2017/7/16.
 */
import React, {Component} from 'react';

export default class QbModalFooter extends Component {
    render() {
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        )
    }
}