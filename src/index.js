import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firstcomponent, { Profi } from './component/Firstcomponent';
import { Gallary,Profile } from './component/Gallary';
import Algebricexp from './component/Algebricexp';
import Demo22 from './component/Demo22';
import Style from './component/Style';
import Product from './component/Product';
import NavLayout from './component/NavLayout';
import Routeconfig from './component/Routeconfig';
import Counter from './component/Counter';
import Like from './component/Like';

// let v=[{x:5,y:8},{x:6,y:9},{x:7,y:45}];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Gallary/>
    <Profile/>
    <App />
    <Firstcomponent />
    <Profi/>
    <Algebricexp x={8} y={8} />
    <Style />
    <Product/> */}
    {/* <Like/> */}
    <Routeconfig/>
    {/* <Counter/> */}
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
