import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import IMenu from './Imenu.jsx';

function ProductItem(){
  return(
    <div>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
  );
}

function IDisplay(){
  const name = 'Ice Latte';
  const size = 'Medium';
  const price = 2.5;
  const isAvailable = true;
  return(
    <div>
      <h3>
        <img src="https://tubecafecambodia.com/wp-content/uploads/2025/01/Thnol-Coffee-1-683x1024-1-370x414.png" alt="tnolCoffe"/>
        <br />
        I love {name}, Size {size} and Price {price}
      </h3>
    </div>
  );
}

function MyGoal() {
  return(
    <div>
      <p>My goal is to build a good product!</p>
    </div>
  );
}

function App() {
  return(
    <div>
      <IMenu />
      <div id="mainbox">
        <h1>Welcome to Kase CADT</h1>
        <IDisplay />
        <ProductItem />
        <MyGoal />
      </div>
    </div>

  );
    
}

export default App