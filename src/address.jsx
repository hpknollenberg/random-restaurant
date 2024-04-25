

const styles = {
    address: {
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '5vh',
      paddingBottom: '5vh',
      backgroundColor: 'rgb(150, 197, 247',
      color: 'rgb(252, 249, 238)',
    }, 
    mainTitle: {
      fontStyle: 'italic',
    },
  }




function Address() {
    return (
        <div style={{...styles.address}}>
            <h4 style={{...styles.mainTitle}}>VOID & AUGURY & PRESENCE & FOOD</h4>
            <p>0000 Unnamed Road</p>
            <p>Polk City, IA 50226</p>
            <p>Phone: 111-666-0000</p>
        </div>
      )
}


  
 
export default Address;