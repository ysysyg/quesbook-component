import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        alert('hello');
    }
    render() {
        return (
            <div>hello world</div>
        )
    }
}

export default MyComponent;