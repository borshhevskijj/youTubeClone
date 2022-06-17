import React from 'react';
import App from './App';
import store from './store/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
