import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'

import { calculatePizzaPrice } from '../../Scripts/pizza';

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removePizza ,closePay} from '../../Features/order-slice';

// Small pizza card that display info about the pizza , allows the user to edit or delete the pizza
function PizzaDetails(pizza) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var title = pizza.pizza.size + " Pizza";
    var tops = pizza.pizza.toppings.join(" , ") ;
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-auto d-flex justify-content-center align-items-center d-none d-sm-none d-md-block" style={{ padding: "8px" }}>
                    <img src={process.env.PUBLIC_URL + "/Images/Pizza_size.png"} className="img-fluid rounded-start" style={{ height: "64px" }} alt="..." />
                </div>
                <div className="col-md-auto">
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        <button className='btn btn-outline' onClick={() =>
                        { 
                            navigate('/edit/' + pizza.pizza.id);
                            dispatch(closePay());
                        }}><AiOutlineEdit /></button>
                        <button className='btn btn-outline'
                                    onClick={() => {
                                        dispatch(removePizza(pizza.pizza));
                                        navigate('/size');
                                    }}><HiOutlineTrash /></button> 

                        </h5>
                        <p className="card-text">{pizza.pizza.toppings.length > 0 ? tops + " , " : ""  } <br /> <hr /> <span className='float-end'>&nbsp; Price : {calculatePizzaPrice(pizza.pizza)} ₪ </span> <br /></p>

                    </div>
                </div>
                <div className="col-auto">

                </div>
            </div>
        </div>
    )
}

export default PizzaDetails