import './App.css';

import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

import ErrorNotFound from './Routes/404/ErrorNotFound';
import Home from './Routes/Home/Home';
import PizzaSizePicker from './Routes/PizzaSizePicker/PizzaSizePicker';
import NavBar from './Components/Nav/NavBar';
import OrderDetails from './Components/OrderDetails/OrderDetails';
import ToppingSelector from './Routes/ToppingSelector/ToppingSelector';
import PizzaEdit from './Routes/PizzaEdit/PizzaEdit';
import OrderPay from './Components/OrderPay/OrderPay';
import About from './Routes/About/About';

function App() {
  const order = useSelector((s) => s.order.order);
  const pay = useSelector((s) => s.order.pay);
  // {pay === true && order.length > 0 ? <OrderPay/>: null}

  return (
    <>
      <NavBar/>
      <div  style={{ marginTop: "10vh" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/size" element={<PizzaSizePicker />} />
        <Route path="/topping" element={<ToppingSelector />} />
        <Route path="/edit/:id" element={<PizzaEdit />} />
        <Route path="/pay" element={<OrderPay />} />

        <Route path="*" element={<ErrorNotFound />} />
        <Route path="/about" element={<About />} />

      </Routes>
      {order.length > 0 && !pay? <OrderDetails/> : ""}
    </>
  );
}

export default App;
