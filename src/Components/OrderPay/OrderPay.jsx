import React from 'react'

import { useDispatch, useSelector} from 'react-redux';
import {togglePay,clearOrder} from '../../Features/order-slice'
import PizzaDetails from '../PizzaDetails/PizzaDetails';

import { totalCost } from '../../Scripts/pizza';


import './OrderPay.css'
import { useNavigate } from 'react-router-dom';

// Similer to OrderDetails.jsx , function as confirm payment method (in real life would be the cash or card screen)

function OrderPay() {
    const order = useSelector((s) => s.order.order);
    const takeOutOption = useSelector((s) => s.order.takeOutOption);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (takeOutOption === "" || order.length === 0) {
        navigate("/");
        dispatch(clearOrder());
      }
  return (

       <div className="container bg-light border border-2 border-secondary rounded-3 p-4" 
       style={{width:"90vw"}}>
        <div className="text-center p-2 border-bottom fs-4">
            Order Details


        </div>
        <div className="card-body p-3" >
            <h5 className="card-title">Order:</h5>
            <div className='overflow-auto' style={{maxHeight:"40vh"}}>
                {order.map((p)=> <PizzaDetails key={p.id} pizza={p} />)}
            </div>
            <p className="card-text">Total {totalCost(order)} ₪</p>
            <p >Pickup method : {takeOutOption}</p>
            <hr />
            <button className="btn btn-success float-end" style={{marginBottom:"8px"}}
            onClick={()=>{
                dispatch(togglePay());
                dispatch(clearOrder());
                navigate("/");
            }}>Pay</button>
            <br />
        </div>
    </div>
  )
}

export default OrderPay