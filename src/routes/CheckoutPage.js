import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { confirmOrderInformation } from "../features/cart/cartSlice";
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

  return (
    <div>
      <Header />
      <main>
        <form onSubmit={handleSubmit} className={styles.checkoutForm}>
          <input type="firstname" placeholder="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
          <input type="lastname" placeholder="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>          
          <input type="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>          
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>          
          <input type="telephone" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>          
          <input type="payment" placeholder="Payment" value={payment} onChange={(e) => setPayment(e.target.value)}/>          
          {/* add form validation to prevent empty or incorrect fields*/}
          <input type="submit" value="Place order" />
        </form>
      </main>
    </div>
  );
}

export default CheckoutPage;
