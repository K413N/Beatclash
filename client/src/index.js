import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './Components/Context';
import { Auth0Provider } from '@auth0/auth0-react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <Auth0Provider
//     domain={process.env.REACT_APP_AUTH0_DOMAIN}
//     clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
//     redirectUri={window.location.origin}>
//     <ContextProvider>
//     <App />
//     </ContextProvider>
//     </Auth0Provider>

//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}>
    <ContextProvider>
    <App />
    </ContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
