import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);

// const elem1 = <span>Hello</span>;
// const elem2 = <span>World</span>;

// // const element = React.createElement('div', { a: 4, children: 'Hello' });

// const jsxElements = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElements);

// ReactDOM.render(jsxElements, document.querySelector('#root'));
