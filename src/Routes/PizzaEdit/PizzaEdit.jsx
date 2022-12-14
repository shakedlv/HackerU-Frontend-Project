import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updatePizzaTopping ,updatePizzaSize, clearOrder} from '../../Features/order-slice'
import { toppings } from '../../Scripts/pizza';



/**
 * @param {*} array  Split array into chunk (rows) to display evenly
 * @returns array of arrays (row)
 */
const arraySpliter = (array) => {
    var ret = []
    var chunkSize = 6;
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        ret.push(chunk);
    }
    return ret;
}
// Pizza Edit page , allows the user to change size and topping after creating the pizza 
function PizzaEdit() {
    const pizzaSizes = ["Small", "Medium", "Large"]

    const { id } = useParams() // recive the id from the url , random id is defiend when creating a pizza 

    const order = useSelector((s) => s.order.order);
    const index = order.findIndex(p => p.id === id)
    const pizza = order[index];
    const splitedToppings = arraySpliter(toppings);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const takeOutOption = useSelector((s) => s.order.takeOutOption);
    if (takeOutOption === "" ) {
        navigate("/");
        dispatch(clearOrder());
      }
    
    const handleAddToppings = (topping, id) => { 
        dispatch(updatePizzaTopping({ id, topping }));
    }
    const handleToggle = event => {
        event.currentTarget.classList.toggle('active');
    }

    return (
        <div className='container'>
            <h3>Edit Pizza Details :</h3>
            <hr />
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor='sizeSelect'>Pizza Size</label>
                <select id='sizeSelect' className='form-select' defaultValue={pizza.size}
                 onChange={(e)=>{
                    dispatch(updatePizzaSize({id:pizza.id,size:e.target.value}))
                 }} >
                    {pizzaSizes.map((s) => {
                        return <option key={s} value={s}>{s}</option>;
                    })}
                </select>
            </div>
            <h4>Pick Toppings :</h4>
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
            <button type="button" className='btn btn-outline-success' onClick={()=>navigate("/size")}>Add Another Pizza</button>
        </div>
    )
}

export default PizzaEdit