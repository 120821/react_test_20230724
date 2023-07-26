//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter, Route } from 'react-router-dom'; // 导入 Route 组件

////import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import About from './About';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <BrowserRouter>
//      <Routes> {[> 包裹所有 Route 组件 <]}
//        <Route path="/" element={<App />} />
//        <Route path="/about" element={<About />} />
//      </Routes>
//    </BrowserRouter>
//  </React.StrictMode>
//);

//// If you want to start measuring performance in your app, pass a function
//// to log results (for example: reportWebVitals(console.log))
//// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 导入 Routes 和 Route 组件

import './index.css';
import App from './App';
import About from './About';
import Hi from './Hi';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> {/* 使用 Routes 组件 */}
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/hi" element={<Hi/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
