import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

import { orderConfirmation } from "../features/cart/cartSlice";
//import { restartOrder, emptyCart } from "../features/cart/cartSlice";
import Header from "../components/Header";

function ConfirmationPage () {
  const order = useSelector(orderConfirmation);
  //const dispatch = useDispatch();

  //add redirect timer function, when redirected to home page old order (confirmed one) will be removed from cart
    // dispatch(restartOrder());
    // dispatch(emptyCart());


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
    </div>
  );
}

export default ConfirmationPage;
