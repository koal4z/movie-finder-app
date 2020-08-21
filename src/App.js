import React from 'react';
import './css/App.css';

import { Provider } from 'react-redux';
import store from './reducer';
import Nav from './components/nav';
import Section from './components/section';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <header>
            <Nav />
          </header>
          <main>
            <Section />
          </main>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
