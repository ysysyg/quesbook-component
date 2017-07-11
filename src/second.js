import React, {Component} from 'react';

class Second extends Component {
    constructor(props) {
        super(props);
        alert('second');
    }
    render() {
        return (
            <div>hello world  second</div>
        )
    }
}

export default Second;