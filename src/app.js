import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
// Webpack automatically searches for .js files & .js files don't need to be 
//refered to as .js
//ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

const Layout = (props) => {
    return (
        <div>
        <p>Header</p>
        {props.content}
        {props.children}
        <p>Footer</p>
        </div>
    );
};

const template = (
        <div>
        <h1>Page Title</h1>
        <p>This is some content!!</p>
        </div>   
);
// One way to render jsx into the browser
//ReactDOM.render(<Layout content={template} />, document.getElementById('app')); pass threw props
// 2nd way to render jsx into the browser must be passed threw props.children
ReactDOM.render((<Layout content={template}>
    <div>
    <h2><i>Page Content Title</i></h2>
    <p>This is my Page</p>
    </div>
</Layout>), document.getElementById('app')
);