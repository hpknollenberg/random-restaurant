import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Menu from './menu'
import RestaurantName from './restaurant-name'
import Address from './address'


const styles = {
  items: {
    display: 'flex',
    fontSize: '2vh'
  },
  titles: {
    fontWeight: 'bold',
    paddingBottom: '1vh',
    paddingTop: '5vh',
    textShadow: '2px 2px rgb(150, 197, 247'
  }
}

function Contact() {  

  return (
    <div className="d-flex justify-content-center">
      <div className="p-3" >
        <RestaurantName />
        <div class="d-flex justify-content-center">
            <h1 style={{...styles.titles}}>Contact</h1>
        </div>
        <div class="d-flex justify-content-center p-0">
            <p>Will you call us.</p>
        </div>
        <div class="d-flex justify-content-center">
            <p>It is below.</p>
        </div>
      </div>
    </div>
  )
}


export default Contact