import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from "./components/Results";
import request from './components/request';


function App() {

  const [selectedOption, setSelectedOption]= useState(request.fetchTrending)


  return (
    <div className="app">



    <Header />
    {/* we can also pass setState */}
    <Navbar setSelectedOption={setSelectedOption}/>

    <Results  selectedOption={selectedOption}/>

    </div>
  );
}

export default App;
