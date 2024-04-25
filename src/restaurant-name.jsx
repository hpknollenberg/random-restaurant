import beach from './assets/Designer.jpeg'

const styles = {
    title: {
      fontWeight: 'bold',
      paddingBottom: '1vh',
      textAlign: 'center',
      fontStyle: 'italic' 
    },
    image: {
      height: '40vh',
      borderRadius: '100%',
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
        </div>
      )
}


  
 
export default RestaurantName;