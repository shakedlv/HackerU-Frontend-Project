import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updatePizzaTopping } from '../../Features/order-slice'
import { useNavigate } from "react-router-dom";
import { toppings } from '../../Scripts/pizza';

const arraySpliter = (array) => {
    var ret = []
    var chunkSize = 6;
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        ret.push(chunk);
    }
    return ret;
}
function ToppingSelector() {
    const takeOutOption = useSelector((s) => s.order.takeOutOption);
    const splitedToppings = arraySpliter(toppings);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const order = useSelector((s) => s.order.order);

    const [pizza, setPizza] = useState([])
    useEffect(() => {
        setPizza(order[order.length - 1]);
    }, [order])

    const handleAddToppings = (topping, id) => {
        dispatch(updatePizzaTopping({ id, topping }));
    }
    const handleToggle = event => {
        event.currentTarget.classList.toggle('active');
    }

    if (takeOutOption === "") {
        navigate("/");
    }
    return (
        <div className='container'>
            <h3>Select Toppings</h3>
            {
                splitedToppings.map((c) => {
                    return <div className="row g-3">
                        {c.map((t) => {
                            return <div className="col text-center" key={t}>
                                <button type="button" className="btn btn-outline-secondary"
                                    onClick={function (event) { handleToggle(event); handleAddToppings(t, pizza.id); }} > {t}</button>
                            </div>
                        })}
                    </div>
                })
            }
            <br />
            <hr />
            <button className='btn btn-outline-success' onClick={() => navigate("/size")}>Add Another Pizza</button>

        </div>
    )
}

export default ToppingSelector