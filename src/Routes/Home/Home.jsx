import React from 'react'
import './Home.css';
import { useDispatch } from 'react-redux';
import { setTakeOutOption } from '../../Features/order-slice';
import { useNavigate } from "react-router-dom";


// Main Page , Display the user the takeout option to create a new order
function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <div style={{ height: "60vh"}}>
            <div className='container mGrid'  >
                <div className="card text-white border border-4 rounded-3"
                    onClick={() => {
                        dispatch(setTakeOutOption("Take Away"));
                        navigate("/size");
                    }}>
                    <div className="card-header text-dark  text-center h3" style={{height:'48px'}}>
                        Take Away
                    </div>
                    <img src={process.env.PUBLIC_URL + "/Images/Takeaway.png"} className="card-img" alt="..." />
                </div>
                <div className="card text-white  border border-4 rounded-3"
                    onClick={() => {
                        dispatch(setTakeOutOption("Eat in"));
                        navigate("/size");
                    }}>
                    <div className="card-header text-dark  text-center h3" style={{height:'48px'}}>
                        Eat In
                    </div>
                    <img src={process.env.PUBLIC_URL + "/Images/EatInPlace.png"} className="card-img" alt="..." />
                </div>
            </div>
        </div>

    )
}

export default Home