import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PizzaDetails from '../PizzaDetails/PizzaDetails';
import { clearOrder, togglePay } from '../../Features/order-slice'
import { useNavigate } from 'react-router-dom';

// Displayed only after picking shipping type (take away or eat in) , grant the user the ability to edit is order or pay 
function OrderDetails() {
  const order = useSelector((s) => s.order.order);
  const takeOutOption = useSelector((s) => s.order.takeOutOption);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (takeOutOption === "") {
    navigate("/");
    dispatch(clearOrder());
  }
  return (
    <div className='container fixed-bottom border border-secondary border-bottom-0 border border-3 rounded-top' style={{ padding: "8px", paddingBottom: "48px" }}>
      <span className='fs-4'>Order Details :  </span> <span className='text-muted'>Shipping type : {takeOutOption}</span>
      <hr />
      <div className='overflow-auto' style={{ maxHeight: "20vh" }}>
        {order.map((p) => <PizzaDetails key={p.id} pizza={p} />)}
      </div>
      <button className='btn btn-outline-success' style={{ position: 'absolute', right: "5px", bottom: "5px" }}
        onClick={() => {
          dispatch(togglePay());

          navigate('/pay');

        }}>Pay Order <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{order.length} <span className="visually-hidden">unread messages</span></span></button>

    </div>
  )
}

export default OrderDetails