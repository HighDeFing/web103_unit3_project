import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="App-header">
        <h1>Music Events Miami</h1>
        <div className="header-buttons">
          <Link to="/"><button>Home</button></Link>
        </div>
        <div className="header-buttons">
          <Link to="/events"><button>Events</button></Link>
        </div>
</header>
)
  ;
}

export default Header;