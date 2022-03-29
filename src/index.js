import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = React.createElement('div', { a: 4, children: 'Hello' });

console.log('element', element);

ReactDOM.render(element, document.querySelector('#root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
