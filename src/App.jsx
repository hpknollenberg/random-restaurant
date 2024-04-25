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
    paddingTop: '5vh'
  },
}




function App() {
  const [menu, setMenu] = useState([]); //set state for menu, as well as each section of the menu (filtered)vvv
  const [dinner, setDinner] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [appetizers, setAppetizers] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  


  useEffect(() => {
    axios.get(`https://www.jsonkeeper.com/b/MDXW`) //fetching from the api
    .then(response => {
      setMenu(response.data)
      setAppetizers(response.data.filter((x) => x.category === "Appetizer").map((food) => { //filters appetizers
        return (
          <div key={food.id} style={{...styles.items}} className="row"> {/*Displays food item title, description, and price*/}
            <h3 className="">{food.title}</h3>
            <p className="col-10">{food.description}</p>
            <p className="col-2">{food.price}</p>
          </div>
        )
      }))
      setDinner(response.data.filter((x) => x.category === "Dinner").map((food) => {
        return (
          <div key={food.id} style={{...styles.items}} className="row">
            <h3 className="">{food.title}</h3>
            <p className="col-10">{food.description}</p>
            <p className="col-2">{food.price}</p>
          </div>
        )
      }))
      setLunch(response.data.filter((x) => x.category === "Lunch").map((food) => {
        return (
          <div key={food.id} style={{...styles.items}} className="row">
            <h3 className="">{food.title}</h3>
            <p className="col-10">{food.description}</p>
            <p className="col-2">{food.price}</p>
          </div>
        )
      }))
      setBreakfast(response.data.filter((x) => x.category === "Breakfast").map((food) => {
        return (
          <div key={food.id} style={{...styles.items}} className="row">
            <h3 className="">{food.title}</h3>
            <p className="col-10">{food.description}</p>
            <p className="col-2">{food.price}</p>
          </div>
        )
      }))
      setDrinks(response.data.filter((x) => x.category === "Drink").map((food) => {
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
        <RestaurantName />'
        <h1 style={{...styles.titles}}>Appetizers</h1>
        {appetizers}
        <h1 style={{...styles.titles}}>Dinner</h1>
        {dinner}
        <h1 style={{...styles.titles}}>Lunch</h1>
        {lunch}
        <h1 style={{...styles.titles}}>Breakfast</h1>
        {breakfast}
        <h1 style={{...styles.titles}}>Drinks</h1>
        {drinks}
      </div>
    </div>
  )
}


export default App
