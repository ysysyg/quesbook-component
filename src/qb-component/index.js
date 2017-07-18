/**
 * Created by az on 2017/7/12.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QbLayout from './QbLayout';
import QbHeader from './QbHeader';
import QbFooter from './QbFooter';

import QbButton from './QbButton';
import {QbCheckBox, QbRadio, QbInput} from './QbInput';
import {QbModalBody, QbModalHeader, QbModalFooter, QbModal} from './QbModal';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            show: false
        }
    }
    toggleModal () {
        this.setState({
            show: !this.state.show
        });
        console.log('Tag show is, ', this.state.show);
    }
    render() {
        return(
            <div>
                <QbLayout>
                    this is content
                </QbLayout>
                <hr/>
                <QbHeader></QbHeader>
                <QbButton label="hello"
                          className="btn btn-primary"
                          size="small"
                          clickHandler={this.toggleModal.bind(this)} dataTarget="#modal" dataToggle='modal'/>
                <QbCheckBox label="hello" changeHandler={()=> alert('hi')}/>
                <QbRadio label="hello" changeHandler={()=> alert('hello')}/>
                <QbInput size="small" changeHandler={(e)=> alert(e.target.value)}/>
                <QbModal target="modal" >
                    <QbModalHeader>
                        <div>header</div>
                    </QbModalHeader>
                    <QbModalBody>
                        <div>body</div>
                    </QbModalBody>
                    <QbModalFooter>
                        <QbButton label="close" dataTarget="#modal" dataToggle='modal'/>
                    </QbModalFooter>
                </QbModal>
                <QbFooter logo='abc'></QbFooter>
            </div>
        )
    }
}

const div = document.getElementById('root');
ReactDOM.render(<App />, div);
