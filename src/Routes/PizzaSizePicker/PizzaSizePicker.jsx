import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza, clearOrder } from '../../Features/order-slice'
import uuid from 'react-uuid';
import { useNavigate } from "react-router-dom";

// Create new pizza with specific size 
function PizzaSizePicker() {
  const takeOutOption = useSelector((s) => s.order.takeOutOption);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNewPizza = (size) => {
    dispatch(addPizza({ id: uuid(), size: size, toppings: [] }))
    navigate("/topping");
  }
  if (takeOutOption === "") {
      navigate("/");
      dispatch(clearOrder());
    }
  return (
    <div className='container' >
      <div className='container d-flex flex-row gap-3 justify-content-center'  >
        <div className="card text-white border border-4 rounded-3 "
          onClick={() => {
            createNewPizza("Small");
          }}>
          <div className="card-header text-dark  text-center">
            Small
          </div>
          <img src={process.env.PUBLIC_URL + "/Images/Pizza_size.png"} className="card-img" style={{ height: "30%", width: "30%", marginTop: "35%", marginLeft: "35%" }} alt="..." />
        </div>
        <div className="card text-white border border-4 rounded-3"
          onClick={() => {
            createNewPizza("Medium");
          }}>
          <div className="card-header text-dark  text-center" >
            Medium
          </div>
          <img src={process.env.PUBLIC_URL + "/Images/Pizza_size.png"} className="card-img" style={{ height: "60%", width: "60%", marginTop: "17%", marginLeft: "17%" }} alt="..." />
        </div>
        <div className="card text-white border border-4 rounded-3"
          onClick={() => {
            createNewPizza("Large");
          }}>
          <div className="card-header text-dark  text-center">
            Large
          </div>
          <img src={process.env.PUBLIC_URL + "/Images/Pizza_size.png"} className="card-img" alt="..." />
        </div>
      </div>
    </div>
  )
}

export default PizzaSizePicker