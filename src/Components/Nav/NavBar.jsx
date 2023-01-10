import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearOrder } from '../../Features/order-slice';


// Header of each page , display the pizza company logo 
function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container d-flex justify-content-center">
        <a className="navbar-brand" href="#!" onClick={() => {
          navigate("/about");
          dispatch(clearOrder());

        }}>
          <img src={process.env.PUBLIC_URL + "/Images/Pizza_Logo.png"} alt="" width="42" height="42" />
        </a>
      </div>
    </nav>
  )
}

export default NavBar