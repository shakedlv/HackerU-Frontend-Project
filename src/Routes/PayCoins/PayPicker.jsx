import {useState} from 'react'
import { useSelector} from 'react-redux';
import { totalCost } from '../../Scripts/pizza';

import './PayPicker.css';

function PayPicker() {
    const order = useSelector((s) => s.order.order);

    const [amount, setAmount] = useState(0);

    const notes = ["nis_20.jpg", "nis_50.jpg", "nis_100.jpg", "nis_200.jpg"]
    const coins = ["10-Agorot.png", "nis_1.png", "Shekel2.png", "Shekel5.png", "Shekel10.png"]
    return (<>
        <div className='container' style={{alignItems:"center"}}>
            <div className='n-grid'>
            {
                notes.map((m) => {
                    return <div key={m}>
                        <img src={process.env.PUBLIC_URL + "/Images/" + m} alt={m} />
                    </div>
                })
            }
            </div>
            <div className='c-grid'>
            {
                coins.map((m) => {
                    return <div key={m}>
                        <img src={process.env.PUBLIC_URL + "/Images/" + m} alt={m} />
                    </div>
                })
            }
            </div>
        </div>
        <div className='position-absolute bottom-0 end-0 border border-3 p-3'>
            <p>Total Cost : {totalCost(order)} ₪</p>
            <p>Total Paid : {amount} ₪</p>
        </div>
        </>
    )
}

export default PayPicker