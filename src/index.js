import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const data = {
  id: 'id-1',
  url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
  title: 'Feathers. Art abstract',
  price: 500,
  author: {
    tag: 'ractapopulous',
    url: 'https://pixabay.com/users/ractapopulous-24766/',
  },
  quantity: 10,
};

const painting = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Автоp: <a href={data.author.url}>{data.author.tag}</a>
    </p>
    <p>Цена: {data.price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

ReactDOM.render(painting, document.querySelector('#root'));

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

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
