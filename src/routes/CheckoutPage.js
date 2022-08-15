import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { confirmOrderInformation } from "../features/cart/cartSlice";
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
        <form onSubmit={handleSubmit}>
          <label>
            First name:
            <input type="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
          </label>
          <label>
            Last name:
            <input type="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
          </label>
          <label>
            Address:
            <input type="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Telephone number:
            <input type="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
          </label>
          <label>
            Payment method:
            <input type="payment" value={payment} onChange={(e) => setPayment(e.target.value)}/>
          </label>
          {/* add form validation to prevent empty or incorrect fields*/}
          <input type="submit" value="Place order" />
        </form>
      </main>
      <p>Checkout page</p>
    </div>
  );
}

export default CheckoutPage;
