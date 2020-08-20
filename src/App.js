import React from 'react';
import './css/App.css';

import Nav from './components/nav';
import Section from './components/section';

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
      </div>
    </>
  );
}

export default App;
