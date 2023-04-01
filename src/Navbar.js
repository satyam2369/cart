import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = (props) => {
        return(
          <div style={styles.nav}>
          <input className="form-control mr-sm-2" style={{width:500,border:'1px solid grey'}}  type="search" placeholder="Search product" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" style={{marginRight:460,background:"#FFFFE0",borderTop:'1px solid yellow',borderBottom:'1px solid yellow',borderRight:'1px solid yellow',borderLeft:'1px solid white',color:'grey' ,marginLeft:-30,height:36}} type="submit">Search</button>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
    

    

        );
        
}
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 30
    },
    
    nav: {
      height: 60,
      background: '#578',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 10,
      top: -9
    }
  };
export default Navbar;
