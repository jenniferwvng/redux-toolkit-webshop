import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { 
  confirmOrderInformation, 
  allCartItems,
  cartTotalPrice
} from "../features/cart/cartSlice";
import styles from '../styles/Checkout.module.css'
import Header from "../components/Header";

function CheckoutPage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [payment, setPayment] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(confirmOrderInformation({
      firstname,
      lastname,
      address,
      email,
      telephone,
      payment
    }));
    navigate("/confirmation");
  }

  const cartArray = useSelector(allCartItems);
  const checkoutTotalPrice = useSelector(cartTotalPrice);

  const renderCheckoutItems = cartArray.map(cartItem => (
    <div className={styles.cartContentDivideGrid}>            
        <span>
            <img src={cartItem.productImage} width={50} alt={cartItem.productName}/>
            <p>{cartItem.productName}</p>     
        </span>      
        <span>
          <p style={{fontWeight: 'bold'}}>{cartItem.productPrice} SEK</p>       
        </span>
    </div>
  ))
  
  
  return (
    <div>
      <Header />
      <main>
        <h1 style={{color: 'grey', textAlign: 'center'}}>Your checkout cart</h1>
        <article className={styles.checkoutCartGrid}>        
          <div>          
            {renderCheckoutItems}          
            <p style={{ fontWeight: 'bold'}}>Total: {checkoutTotalPrice} SEK</p>     
          </div>
        </article>
        <span>
          
        </span>
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <input type="firstname" placeholder="First name"  value={firstname} required onChange={(e) => setFirstname(e.target.value)}/>
          <input type="lastname" placeholder="Last name" value={lastname} required onChange={(e) => setLastname(e.target.value)}/>          
          <input type="address" placeholder="Address" value={address} required onChange={(e) => setAddress(e.target.value)}/>          
          <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}/>          
          <input type="telephone" placeholder="Telephone" value={telephone} required minLength={10} onChange={(e) => setTelephone(e.target.value)}/>          
          <input type="payment" placeholder="Payment" value={payment} required onChange={(e) => setPayment(e.target.value)}/>          
          {/* add form validation to prevent empty or incorrect fields*/}
          <input type="submit" value="Place order" />
        </form>
      </main>
    </div>
  );
}

export default CheckoutPage;
