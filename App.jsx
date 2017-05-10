import React from 'react';
import Page from './dev/js/components/Page.jsx'

class App extends React.Component {
    render() {
        return (
            <Page data={this.props.data} />
        );
    }
}

export default App;
