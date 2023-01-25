import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Foot from './components/Foot';
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import Hero from './components/Hero';

import './App.css';


function App() {
  return (
    <>

      
     






      <Routes>

        <Route path='/' element={<HomePage />}></Route>
      </Routes>





    </>
  );
}

export default App;
