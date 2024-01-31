import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Menu from './components/Menu'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Nav />
      <Header/>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;