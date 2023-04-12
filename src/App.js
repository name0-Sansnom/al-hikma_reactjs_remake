import React from 'react';
import './App.css';
import MainNav from './component/header/MainNav';
import Nav from './component/header/Nav';
import Footer from './component/footer/Footer';
const App = () => {
  return (

    <div>
      <Nav />
      <MainNav />
      {/* =========== footer component =======  */}
    <Footer />
    </div>
  );
}

export default App;
