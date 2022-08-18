import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { orderConfirmation } from "../features/cart/cartSlice";
import { restartOrder, emptyCart } from "../features/cart/cartSlice";
import Header from "../components/Header";
import styles from '../styles/Confirmation.module.css'

function ConfirmationPage () {
  const order = useSelector(orderConfirmation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  setTimeout(() => {
    dispatch(restartOrder());
    dispatch(emptyCart());
    navigate("/");
  }, 8000);

  const renderOrderInfo = order.map(orderinfo => (
    <div className={styles.orderInformation}>
        <p>Thank you for your order, {orderinfo.firstname}</p>
        <p>You will receive an order confirmation to {orderinfo.email}</p>
        <p>Chosen payment method: {orderinfo.payment}</p>
    </div>
  ))
  

  return (
    <div>
      <Header />
      <div className={styles.displayGrid}>
        <div className={styles.gridChild}>
        {renderOrderInfo}    
          <span>
          <button className={styles.redirectButtonParent}>
            <Link to="/" className={styles.redirectButton}>
              Return to start page (you will be redirected after 8 seconds)
            </Link>
          </button>
          </span>  
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
