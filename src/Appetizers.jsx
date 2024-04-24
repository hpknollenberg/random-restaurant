import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Menu from './menu'


const styles = {
  items: {
    display: 'flex',
    fontSize: '2vh'
  },
  titles: {
    fontWeight: 'bold',
    paddingBottom: '1vh'
  }
}

function Appetizers() {
  const [menu, setMenu] = useState([]);
  const [appetizers, setAppetizers] = useState([]);
  


  useEffect(() => {
    axios.get(`https://www.jsonkeeper.com/b/MDXW`)
    .then(response => {
      setMenu(response.data)
      setAppetizers(response.data.filter((x) => x.category === "Appetizer").map((food) => {
        return (
          <div key={food.id} style={{...styles.items}} className="row">
            <h3 className="">{food.title}</h3>
            <p className="col-6">{food.description}</p>
            <p className="col-6">{food.price}</p>
          </div>
        )
      }))
  }
  )})



  return (
    <div className="d-flex justify-content-start">
      <div className="p-3 vh-100">
        <Menu />
        <h1 style={{...styles.titles}}>Appetizers</h1>
        {appetizers}
      </div>
    </div>
  )
}


export default Appetizers
