import React from 'react'
import './Home.css';
import { useDispatch } from 'react-redux';
import { setTakeOutOption } from '../../Features/order-slice';
import { useNavigate } from "react-router-dom";

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    return (
        <div style={{ height: "60vh"}}>
            <div className='container d-flex flex-row gap-3 justify-content-center'  >
                <div className="card text-white border border-4 rounded-3"
                    onClick={() => {
                        dispatch(setTakeOutOption("Take Away"));
                        navigate("/size");
                    }}>
                    <div className="card-header text-dark  text-center">
                        Take Away
                    </div>
                    <img src={process.env.PUBLIC_URL + "/Images/Takeaway.png"} className="card-img" alt="..." />
                </div>
                <div className="card text-white  border border-4 rounded-3"
                    onClick={() => {
                        dispatch(setTakeOutOption("Eat in"));
                        navigate("/size");
                    }}>
                    <div className="card-header text-dark  text-center">
                        Eat In
                    </div>
                    <img src={process.env.PUBLIC_URL + "/Images/EatInPlace.png"} className="card-img" alt="..." />
                </div>
            </div>
        </div>

    )
}

export default Home