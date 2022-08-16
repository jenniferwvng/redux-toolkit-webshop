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
          <Link to="/" className={styles.headerTitleLink}>
            <h1>Webshop simulation</h1>
          </Link>
      </div>  
      <button onClick={handleCartToggle} onMouseEnter={handleCartToggle} className={styles.cartButtonIcon}>
        <img src="/carticon.png" alt="cart-icon" width={45} />
      </button>
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
