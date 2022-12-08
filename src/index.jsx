import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './utils/Context/AuthProvider';
import { Provider } from 'react-redux';
import store from './store';

// import './assets/css/style.css';
// import './assets/css/bootstrap.min.css';
import './assets/scss/code.scss';
import './assets/css/all.css';
import './assets/css/all.min.css';
// import './assets/css/fontawesome.css';
import './assets/css/fontawesome.min.css';

// import './assets/css/style-admin.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
