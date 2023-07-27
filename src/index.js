//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 导入 Routes 和 Route 组件
//import { rootReducer } from './reducers';
//import { createStore } from 'redux';
//import Countdown from './components/Countdown';
//import Page1 from './components/Page1';
//import Page2 from './components/Page2';

//import './index.css';
//import App from './App';
//import About from './About';
//import Hi from './Hi';
//import reportWebVitals from './reportWebVitals';

//const store = createStore(rootReducer);
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <BrowserRouter>
//      <Countdown />
//      <Routes> {[> 使用 Routes 组件 <]}
//        <Route path="/" element={<App />} />
//        <Route path="/about" element={<About />} />
//        <Route path="/hi" element={<Hi/>} />
//        <Route path="/page1" element={<Page1 />} />
//        <Route path="/page2" element={<Page2 />} />
//      </Routes>
//    </BrowserRouter>
//  </React.StrictMode>,
//);

//reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import Countdown from './components/Countdown';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import App from './App';
import Home from './Home';
import About from './About';
import Hi from './Hi';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/hi" element={<Hi />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route exact path="/about" render={() => <About count={this.state.count} handleIncrement={this.handleIncrement} />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
