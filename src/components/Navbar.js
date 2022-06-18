import React, {Component} from "react";
import '../Navbar.css';
import ButtonCalendar from './ScrollToCalendar';
import ButtonContact from './ScrollToContact';
import ButtonHairdressing from "./ScrollToHairdressing";
import Gallery from './Gallery';

export default class Navbar extends Component {
  
  render() {
    let width = window.innerWidth;
    console.log(width)
    if (width > 300){
  return  (
    <div>
  <div className="Navbar">
    <div className="leftSide">
        {/* <div className="ButtonComp">
        <ButtonHairdressing/>
        <ButtonCalendar/>
        <ButtonContact/>
        </div> */}
    </div>
      <div className="Navfoto">
        
      </div>
  </div>
  {/* <div className="Title">Stylizacje</div> */}
  {/* <Gallery/> */}
</div>
  );
} else {
<div>
  <div className="Navbar">
    <div className="leftSide">
        <div className="ButtonComp">
          
        <ButtonCalendar/>
        </div>
    </div>
      <div className="Navfoto">
        
      </div>
  </div>
  <div className="Title">Stylizacje</div>
  {/* <Gallery/> */}
</div>
        }
    }
}