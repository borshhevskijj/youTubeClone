import React from 'react';
import App from './App';
import store  from './store/rootReducer';
import { Provider } from 'react-redux';
import {BrowserRouter } from 'react-router-dom'

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container!); 

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import store  from './store/rootReducer';
// import { Provider } from 'react-redux';
// import {BrowserRouter } from 'react-router-dom'


// ReactDOM.render(
//   <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//   </BrowserRouter>,  
//     document.getElementById('root')
// )