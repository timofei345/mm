import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SplashScreen from './components/pages/public/splashScreen/SplashScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 1000);
  return (
    <>
      {isLoaded ? (
        <App />
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
