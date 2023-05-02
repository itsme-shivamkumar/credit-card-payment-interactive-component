import React, { useContext, useEffect } from 'react'
import App, { AppContext } from '../App';
const CardDetails = () => {

    const {cardNumber,setCardNumber,expiryMonth,setExpiryMonth,expiryYear,setExpiryYear,mobileNumber,setMobileNumber,cardHolderName,setCardHolderName,cvv,setCvv}=useContext(AppContext);

    const handleChange=(e)=>{
        switch (e.target.id){
            case "card--number" : setCardNumber(e.target.value.slice(0,16));break ;
            case "expiry--year": setExpiryYear(e.target.value.slice(0,4)); break ;
            case "expiry--month": setExpiryMonth(e.target.value.slice(0,2)); break;
            case "cvv--number": setCvv(e.target.value.slice(0,3)); break;
            case "cardholder--name": setCardHolderName(e.target.value.slice(0,20)); break;
            case "mobile--number":setMobileNumber(e.target.value.slice(0,11)); break;
            default: console.log("something wrong");
        }
    }

  return (
    <div className="card--details--input">
        <div className="input--label">
            <h2>
                Card Number
            </h2><br/>
            <h3>
                Enter 16-digit card number on the card
            </h3>
            <input type='number' id='card--number' value={cardNumber} onChange={handleChange} />
        </div>
        <div className="input--label">
            <h2>
                Expiry Date
            </h2>
            <input type='number' id='expiry--year' value={expiryYear} onChange={handleChange} />
            <span>/</span>
            <input type='number' id='expiry--month' value={expiryMonth} onChange={handleChange} />
            <br/>
            <h3>
                Enter the expiration date of the card
            </h3>
        </div>
        <div className="input--label">
            <h2>
                CVV Number
            </h2>
            <input type='number' id='cvv--number' value={cvv} onChange={handleChange} /><br/>
            <h3>
                Enter card verification code from the back of the card
            </h3>
            
        </div>
        <div className="input--label">
            <h2>
                Cardholder Name
            </h2>
            <input type='text' id='cardholder--name' value={cardHolderName} onChange={handleChange} /><br/>
            <h3>
                Enter Cardholder's name
            </h3>
            
        </div>
        <div className="input--label">
            <h2>
                Mobile Number
            </h2>
            <input type='phone' id='mobile--number' value={mobileNumber} onChange={handleChange} /><br/>  
            <h3>
                Enter Mobile no.
            </h3>
                      
        </div>
        <submit id="pay--btn">Pay Now</submit>
    </div>
  )
}

export default CardDetails