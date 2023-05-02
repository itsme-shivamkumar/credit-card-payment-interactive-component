import React,{useContext, useEffect} from 'react'
import { AppContext } from '../App'
const Invoice = () => {
  const {currItem,products_data,setCurrItem}=useContext(AppContext);
  useEffect(()=>{
    setCurrItem(products_data[Math.round(Math.random()*products_data.length)])
  },[])
  return (
    <>
      <div className="invoice">
          <h3>Company: </h3> <h2>{currItem.title}</h2>
          <h3>Order number: </h3> <h2>{Math.round(Math.random()*1262)+2054652}</h2>
          <h3>Product: </h3> <h2>{currItem.category?.slice(0,10)}</h2>
          <h3>Price: </h3> <h2>{currItem.price}</h2>
          <span id='semicircle' ></span>
          <p id='dashed-line'>----------------------------------------------------------------------------------------</p>
          <span id='final-price-main-figure'>
          <h3>You have to pay:</h3><br/>
          <h2>{Math.round(currItem.price)-1}.</h2><h3>99 USD </h3>
          </span>
      </div>    
    </>
  )
}

export default Invoice