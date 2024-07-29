import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import logo from './logo.svg';
import user from './user.svg';
import project from './Project Lists White.svg';
import trolley from './Trolley White.svg';

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <>

<nav className='nav'>
      <div className='nav-left'>
        <i class="fa-solid fa-bars fa-2xl"></i>
        <h3>Products</h3>
      </div>

      <div className='nav-cent'><img src="https://cdn.pixabay.com/photo/2024/02/15/20/08/dog-8576035_1280.png"/>
        <div id="re">Map Dude by Pranay</div>
      </div>

      <div className='nav-right'>
        <img src={user} alt="user" />
        <img src={project} alt="project" />
        <img src={trolley} alt="trolley" />
      </div>
    </nav>

      <div className='nav-gap'>
        <h3>Our Price Guarantee</h3>
      </div>

      <div className='nav-gap2 '>
        <i className="fa-solid fa-house fa-xs"></i>
        <i class="fa-solid fa-greater-than"></i>
        <h5>Stores</h5>
      </div>

      <div className='second-nav'>
          <h1>Stores</h1>
          <h4>View all stores</h4>
      </div>





    <main className='main'>
      <div style={{ width: "70vw", height: "67vh" }}>
        <Maps selectPosition={selectPosition} />
      </div>
      <div>
        <SearchBox className="searchbar-new" selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
      </div>
    </main>
    </>
  );
}

export default App;
