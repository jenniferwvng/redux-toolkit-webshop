import { useState } from "react";
import { Link } from "react-router-dom";

import { Cart } from "../features/cart/Cart";
import styles from '../styles/Header.module.css'

function Header () {
    const [toggleState, setToggleState] = useState(false);

    const handleCartToggle = () => {
        setToggleState(!toggleState);
    }

    console.log(toggleState)
  return (
    <div>
    <header className={styles.headerGrid}>
      <div className={styles.headerGridChildren}>
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
            <h1>Webshop simulation</h1>
          </Link>
      </div>  
      <div>
      <button onClick={handleCartToggle} onMouseEnter={handleCartToggle} style={{border: 'none', background: 'white', borderRadius: '10px'}}>
        <img src="/carticon.png" alt="cart-icon" width={45} />
      </button>
    </div>
    </header>

    <article className={styles.cartSlideGrid}>
        <div className={styles.cartSlideGridChildren}>
            <div className={styles.cartSlide} onMouseLeave={handleCartToggle}>
                {toggleState && <Cart />}
            </div>
        </div>
    </article>    
    </div>
  );
}

export default Header;
