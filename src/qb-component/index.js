/**
 * Created by az on 2017/7/12.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QbButton from './QbButton';

class App extends Component {
    render() {
        return(
            <div>
                <QbButton/>
            </div>
        )
    }
}

const div = document.getElementById('root');
ReactDOM.render(<App />, div);