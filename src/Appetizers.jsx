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
    paddingTop: '5vh'
  }
}

function Appetizers() {
  const [menu, setMenu] = useState([]);
  const [appetizers, setAppetizers] = useState([]);
  


  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json`)
    .then(response => {
      setMenu(response.data)
      setAppetizers(response.data.filter((x) => x.category === "Appetizer").map((food) => {
        return (
          <div key={food.id} style={{...styles.items}} className="row">
            <h3 className="">{food.title}</h3>
            <p className="col-10">{food.description}</p>
            <p className="col-2">{food.price}</p>
          </div>
        )
      }))
  }
  )})



  return (
    <div className="d-flex justify-content-center">
      <div className="p-3">
        <RestaurantName />
        <h1 style={{...styles.titles}}>Appetizers</h1>
        {appetizers}
      </div>
    </div>
  )
}


export default Appetizers
