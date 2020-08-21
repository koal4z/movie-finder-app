import React from 'react';
import './css/App.css';

import Nav from './components/nav';
import Section from './components/section';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="container">
        <header>
          <Nav />
        </header>
        <main>
          <Section />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
