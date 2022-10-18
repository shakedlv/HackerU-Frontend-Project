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

function App() {
  const order = useSelector((s) => s.order.order);
  const pay = useSelector((s) => s.order.pay);

  return (
    <>
      <NavBar/>
      <div  style={{ marginTop: "10vh" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/size" element={<PizzaSizePicker />} />
        <Route path="/topping" element={<ToppingSelector />} />
        <Route path="/edit/:id" element={<PizzaEdit />} />

        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
      {order.length > 0 ? <OrderDetails/> : ""}
      {pay === true && order.length > 0 ? <OrderPay/>: null}
    </>
  );
}

export default App;
