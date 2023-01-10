import React from 'react'
import { useNavigate } from "react-router-dom";


// About Page

function About() {
    const navigate = useNavigate();

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <p>
                    <h3>Pizza Self-Checkout Register</h3>
                    Similer to McDonald's self-register , users can create pizza , edit and pay
                </p>
                <button className="btn btn-primary"
                    onClick={() => {
                        navigate("/");
                    }}>Go Home</button>

            </div>
        </div>
    )
}

export default About