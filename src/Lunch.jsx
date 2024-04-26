import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import RestaurantName from './restaurant-name'


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


function Lunch() {
  const [menu, setMenu] = useState([]);
  const [lunch, setLunch] = useState([]);
  


  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json`)
    .then(response => {
      setMenu(response.data)
      setLunch(response.data.filter((x) => x.category === "Lunch").map((food) => {
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
        <h1 style={{...styles.titles}}>Lunch</h1>
        {lunch}
      </div>
    </div>
  )
}


export default Lunch
