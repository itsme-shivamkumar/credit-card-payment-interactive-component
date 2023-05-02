import React, { useEffect } from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import chip from './chip.png';
const Card = () => {
    const {cardSide,cvv,setCardSide,cardHolderName,mobileNumber,cardNumber,expiryMonth,expiryYear}=useContext(AppContext);
    useEffect(()=>{
        if(cvv.length>0)setCardSide("back");
    },[cvv]);
    useEffect(()=>{
        setCardSide("front");
    },[cardHolderName,mobileNumber])
  return (
    <>
        <div className="flip-card">
            <div className={`flip-card-inner ${cardSide==="front"?"":"flipping--transition"} `}>
                <div className="flip-card-front">
                    <h2 id='cc'><p>Credit Card</p><p>Bank Name</p></h2>
                    <img id='golden--chip' src={chip} alt="golden-chip"/>
                    <h2 id='c-cn' >{cardNumber.length>0?`${cardNumber.slice(0,4)} ${cardNumber.slice(4,8)} ${cardNumber.slice(8,12)} ${cardNumber.slice(12,16)}`:"1234 5678 8752 4665"}</h2>
                    <h2 id='c-v' >{expiryMonth.length>0?expiryMonth:"12"}/{expiryYear.length>0?expiryMonth:"2025"}</h2>
                    <h2 id='c-chn'>{cardHolderName.length>0?cardHolderName:"Name Surname"}</h2>
                </div>
                <div className="flip-card-back">
                <span id='electronic-plate' >
                </span>
                <span id='c-cvv'><p>{cvv.length>0?cvv:"666"}</p>
                </span>
                <p id='instructions'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Facere modi numquam officia quis libero eveniet, consequatur 
                    alias vitae dolorem cupiditate ab repellendus nostrum et 
                    dolorum vel eum quisquam natus officiis.
                </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card