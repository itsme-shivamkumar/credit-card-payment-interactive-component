import React,{createContext, useState} from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import {Routes,Route } from 'react-router-dom';
const AppContext=createContext(null);
export default function App() {
  const [currItem,setCurrItem]=useState("");

  const [cardSide,setCardSide]=useState("front");

  const [products_data,setProducts_data]=useState(JSON.parse(localStorage.getItem("products")));

  const [cardNumber,setCardNumber]=useState("");
  const [expiryMonth,setExpiryMonth]=useState("");
  const [expiryYear,setExpiryYear]=useState("");
  const [mobileNumber,setMobileNumber]=useState("");
  const [cardHolderName,setCardHolderName]=useState("");
  const [cvv,setCvv]=useState("");

  return (
    <AppContext.Provider value={{currItem,setCurrItem,products_data,setProducts_data,cardSide,setCardSide,
      cardNumber,setCardNumber,expiryMonth,setExpiryMonth,expiryYear,setExpiryYear,mobileNumber,setMobileNumber,cardHolderName,setCardHolderName,cvv,setCvv,
      
    }}>
      <Navbar/>
        <Routes>
          <Route index element={<Products/>}/>
          <Route exact path="/payment" element={<Services/>}/>
          <Route exact path="/aboutus" element={<AboutUs/>}/>
          <Route exact path="/contactus" element={<ContactUs/>}/>
        </Routes>
      <Footer/>
    </AppContext.Provider>
  )
}

export {AppContext};