import './App.css';
import { useState, useEffect } from 'react';

import colorPickerRed from "./images/color-picker-red.png";
import colorPickerGreen from "./images/color-picker-green.png";
import colorPickerGray from "./images/color-picker-gray.png";

import Payment from './components/Modal/Payment';
import DetailsFourWheel from './components/Modal/DetailsFourWheel';
import DeliveryDate from './components/DeliveryDate';

function App() {

  const prices = {
    model: {
      sport: 65000,
      convertible: 60000},
    color: {
      red: 0,
      green: 1500,
      gray: 1000},
    xwd: {
      normal: 0,
      fourwd: 2000},
    wallConnector: {
      false: 0,
      true: 500},
    mobileConnector: {
      false: 0,
      true:250}
  }

  const stats = {
    range: {
      sport: 450,
      convertible: 300},
    topSpeed: {
      sport: 180,
      convertible: 120},
    acceleration: {
      sport: 1.99,
      convertible: 5}
  }

  const colorAlias = {
    red: "Red Multi-Coat",
    gray: "Midnight Silver Metallic",
    green: "Deep Green Metallic"
  }

  const [chosenCar, setChosenCar] = useState({model: "sport", color: "red", xwd: "normal", wallConnector: false, mobileConnector: false});
  const [priceTotal, setPriceTotal] = useState(prices.model[chosenCar.model]);

  const updateCar = (event) => {
    setChosenCar({...chosenCar, [event.target.name]: event.target.value});
  }

  useEffect(() => {
    setPriceTotal(prices.model[chosenCar.model]+prices.color[chosenCar.color]+prices.xwd[chosenCar.xwd]+prices.wallConnector[chosenCar.wallConnector]+prices.mobileConnector[chosenCar.mobileConnector]);
  });

  return (
    <div className="container">
      <header>
        TESLA CONFIGURATOR
      </header>
      <div className="photos">
        <img src={require(`./images/${chosenCar.model}${chosenCar.color}.png`)} alt = "Preview of your car" className="previewphotos"/>      
      </div>
      <div className="menu">
        <h1>Design your model </h1>
        <DeliveryDate />        
        <table className="stats">
         <thead>
            <tr>
              <th>Range</th>
              <th>Top Speed</th>
              <th>0-100 kmh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stats.range[chosenCar.model]} km</td>
              <td>{stats.topSpeed[chosenCar.model]} kmh</td>
              <td>{stats.acceleration[chosenCar.model]} sec</td>
            </tr>
          </tbody>          
        </table>
         <div className="chooseModel">
          <h2>Model</h2>
          <button
              name="model"              
              value="sport"
              className={chosenCar.model === "sport" ? "widebutton-active" : "widebutton"}
              onClick={updateCar}>Sport, {prices.model.sport} €</button><br></br>
          <button
              name="model"
              value="convertible"
              className={chosenCar.model === "convertible" ? "widebutton-active" : "widebutton"}
              onClick={updateCar}>Convertible, {prices.model.convertible} €</button>
        </div>
        <div className="chooseColor">
          <h2>Paint</h2>
          <label>
            <input
              type="radio"
              name="color"
              value="red"
              className="colorPickerRadio"
              onClick={updateCar}></input>
            <img 
              src={colorPickerRed}
              className= {chosenCar.color === "red" ? "colorPicker-active" : "colorPicker"} 
              alt="Choose color red"></img>
          </label>

          <label>
            <input
              type="radio"
              name="color"
              value="green"
              className="colorPickerRadio"
              onClick={updateCar}></input>
            <img 
              src={colorPickerGreen} 
              className= {chosenCar.color === "green" ? "colorPicker-active" : "colorPicker"} 
              alt="Choose color green"></img>
          </label>

          <label>
            <input
              type="radio"
              name="color"
              value="gray"
              className="colorPickerRadio"
              onClick={updateCar}></input>
            <img 
              src={colorPickerGray} 
              className= {chosenCar.color === "gray" ? "colorPicker-active" : "colorPicker"} 
              alt="Choose color gray"></img>
          </label>
          <p><b>{colorAlias[chosenCar.color]}</b> {prices.color[chosenCar.color]} €</p>
        </div>
        <div className="chooseFourWheel">
          <h2>Four Wheel Drive</h2>
          <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Donec justo nulla, convallis eget feugiat ac, mollis nec sapien.</li>
              <li>Curabitur id eros turpis.</li>
              <li>Price {prices.xwd.fourwd} €</li>
          </ul>
          {chosenCar.xwd === "normal"
            ? <button
                name="xwd"
                value="fourwd"
                className="bluebutton"
                onClick={updateCar}>Add</button>
            : <button
                name="xwd"
                value="normal"
                onClick={updateCar}>Remove</button>
          }
          <DetailsFourWheel />        
        </div>
        <div className="chooseCharging">
          <h2>Charging</h2>
          <p>Home charging equipment is not included</p>
          <input 
              type="checkbox"
              id="wallConnector"
              name="wallConnector"
              value={chosenCar.wallConnector}
              onChange= {() => setChosenCar({...chosenCar, wallConnector: !chosenCar.wallConnector})}></input>
          <label htmlFor="wallConnector"> Wall Connector, {prices.wallConnector.true} €</label><br></br>
          <input 
              type="checkbox"
              id="mobileConnector"
              name="mobileConnector"
              value={chosenCar.mobileConnector}
              onChange= {() => setChosenCar({...chosenCar, mobileConnector: !chosenCar.mobileConnector})}></input>
          <label htmlFor="mobileConnector"> Mobile Connector, {prices.mobileConnector.true} €</label><br></br>
        </div>
        <div className="makeOrder">
          <h2>Order Your Car</h2>
          <DeliveryDate />
          <Payment />
        </div>
      </div>
      <div className="price">
        Vehicle Price: {priceTotal} €
      </div>
    </div>
  );
}

export default App;
