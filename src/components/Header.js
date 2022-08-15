import { useState } from "react";
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
        <h1>Webshop simulation</h1>
      </div>  
      <div>
      <button onClick={handleCartToggle} >
        {toggleState ? <p>close</p> : <p>open</p>}
      </button>
    </div>
    </header>

    <article className={styles.cartSlideGrid}>
        <div className={styles.cartSlideGridChildren}>
            <div className={styles.cartSlide}>
                {toggleState && <Cart />}
            </div>
        </div>
    </article>    
    </div>
  );
}

export default Header;
