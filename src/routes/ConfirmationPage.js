import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { orderConfirmation } from "../features/cart/cartSlice";
import { restartOrder, emptyCart } from "../features/cart/cartSlice";
import Header from "../components/Header";

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
    <div>
        <p>Thank you for your order, {orderinfo.firstname.toUpperCase()}</p>
        <p>You will receive an order confirmation to {orderinfo.email}</p>
        <p>Chosen payment method: {orderinfo.payment}</p>
    </div>
  ))
  

  return (
    <div>
      <Header />
      {renderOrderInfo}
      <p>ConfirmationPage</p>
      <Link to="/">
        Return to start page
      </Link>
      <p>You will be automatically redirected after 8 seconds</p>
    </div>
  );
}

export default ConfirmationPage;
