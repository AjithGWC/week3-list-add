import React from 'react';
import logo from './dist/images/logo.svg';
import './App.css';
import './dist/css/app.css';

function App() {
  return (
    <nav class="side-nav">
      <a href="" class="intro-x flex items-center pl-5 pt-4">
        <img alt="Rubick Tailwind HTML Admin Template" class="w-6" src={logo}></img>
        <span class="hidden xl:block text-white text-lg ml-3"> Ticketing Tool </span> 
      </a>
      <ul class="fd-c">   
        <li class="p-0 mt-6 ml-0" id="nav-home">
          <a href="" class="side-menu side-menu--active">
            <div class="side-menu__icon"> <i data-feather="credit-card"></i> </div>
            <div class="side-menu__title"> Ticket Manager</div>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
