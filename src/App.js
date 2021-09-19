import React from "react";
import User from "./components/User";

import "./App.css";

const App = () => (
  <div>
    <header>
      <a class="title logo" href="/#">
        Kelompok 15
      </a>
      <nav>
        <ul class="nav__links">
          <li>
            <a href="/#">Tugas Modul 4</a>
          </li>
        </ul>
      </nav>
    </header>
    <div className="main-container">
      <User />
    </div>
  </div>
);

export default App;
