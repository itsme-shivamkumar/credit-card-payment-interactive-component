import React from 'react'
import { useContext } from 'react';
import App, { AppContext } from '../App';
import Card from './Card';
import CardDetails from './CardDetails';
import Invoice from './Invoice';


const Services = () => {
  const {products_data}=useContext(AppContext);
  return (
    <div className="payment--section">
      <div className="card--details--input--section">
        <CardDetails/>
      </div>
      <div className="card--details--preview--section">
        <Card/>
      </div>
      <div className="invoice--section">
        <Invoice/>
      </div>
    </div>
  )
}

export default Services