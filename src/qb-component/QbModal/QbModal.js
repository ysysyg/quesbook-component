/**
 * Created by az on 2017/7/13.
 */
import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
/*eslint-disable*/
class QbModal extends Component {
    render() {
        const {target} = this.props;
        return (
            <div className="modal fade" id={target} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default QbModal;