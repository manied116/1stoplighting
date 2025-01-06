import React from 'react';
import Header from './assets/component/Header';
import Footer from './assets/component/Footer';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="app-container font-metropolis">
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
