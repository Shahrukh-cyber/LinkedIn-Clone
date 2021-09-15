import React from 'react';
import './App.css';
import { Feed, Header, Sidebar, Widgets } from './app/component';




function App() {
  return (
    <div>
      <Header />
      <div className="app__body">
        <section className="appbody__siderbar__section">

          <Sidebar />
        </section>
        <section className="appbody__feed__section">

          <Feed />
        </section>
        <section className="appbody__widgets__section">
          <Widgets />

        </section>
      </div>
    </div>
  );
}

export default App;
