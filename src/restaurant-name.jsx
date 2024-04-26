import beach from './assets/Designer.jpeg'

const styles = {
    title: {
      fontWeight: 'bold',
      paddingBottom: '1vh',
      textAlign: 'center',
      fontStyle: 'italic',
      textShadow: '2px 2px rgb(150, 197, 247'
    },
    image: {
      height: '40vh',
      borderRadius: '100%',
      borderStyle: 'solid',
      borderColor: 'rgb(150, 197, 247',
      boxShadow: '4px 4px 20px rgb(150, 197, 247'
    },
  }


function RestaurantName() {
    return (
        <div>
          <h1 className="" style={{...styles.title}}>
            VOID & AUGURY & PRESENCE & FOOD
          </h1>
          <div className="d-flex justify-content-center">
            <img src={beach} style={{...styles.image}}></img>
          </div>
          <div className="d-flex justify-content-center pt-4">
            <p>Our food is.</p>
          </div>
        </div>
      )
}


  
 
export default RestaurantName;