import React from 'react';
import logo from './dist/images/logo.svg';
import './App.css';
import './dist/css/app.css';

function App() {
  return (
    <nav class="side-nav">
      <button href='#' class="intro-x flex items-center w-full pl-5 pt-4">
        <img alt="Rubick Tailwind HTML Admin Template" class="w-6" src={logo}></img>
        <span class="hidden xl:block text-white text-lg ml-3"> Ticketing Tool </span> 
      </button>
      <ul class="fd-c">   
        <li class="p-0 mt-6 ml-0" id="nav-home">
          <button href='#' class="side-menu w-full side-menu--active">
            <div class="side-menu__icon"> <i data-feather="credit-card"></i> </div>
            <div class="side-menu__title"> Ticket Manager</div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default App;
