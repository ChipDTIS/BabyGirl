import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return(
            <div>
            <h2>GraphQL Test</h2>
            <a href="/graphql?query={todo(itemId:1){itemId,item}}">GraphQL Test</a>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));