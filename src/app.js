import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
// Webpack automatically searches for .js files & .js files don't need to be 
//refered to as .js
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
  