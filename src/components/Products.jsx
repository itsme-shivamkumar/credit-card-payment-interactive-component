import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import { useContext,useMemo } from 'react';
import {AppContext} from '../App';

// FETCH PRODUCTS--------------------------------------
const base_url="https://dummyjson.com/products";
const getProducts=(setProducts_data,products_data,setCurrItem)=>{
  console.log("inside getProducts")
  fetch(base_url)
  .then((res)=>res.json())
  .then((data)=>{
    localStorage.setItem("products",JSON.stringify(data.products));
    setProducts_data(JSON.parse(localStorage.getItem("products")));
  })
  .catch((e)=>console.log("error occured: ",e))
  .finally(()=>console.log("products fetched successfully"))
}
// ------------------------------------------------------



const Products = () => {

  const {currItem,setCurrItem,products_data,setProducts_data}=useContext(AppContext);

  // handling ratings ----------------------------------
  const handleRating=(num)=>{
    let number=Math.floor(num);
    let star='⭐';
    let res="";
    for(let i=0;i<5;i++){
      if(i<number)res+=star;
      else res+="🌒"
    }
    return (res);
  }

  // Caching -------------------------------------------

  if(!products_data)getProducts(setProducts_data,products_data,setCurrItem);
  return (
    <div className="products--section">
      <div className="products--container" >
      {products_data?.map((pr,index)=>(
        <Link to="/payment" key={index} >
        <div className='product--card' >
          <img src={`${pr.thumbnail}`} alt={`${pr.id}`} />
          <hr/>
          <span className='product--category'>{`${pr.category}`}</span>
          <p className='product--title' >{`${pr.title.slice(0,20)}`}</p>
          <p className='product--description'>{`${pr.description.slice(0,27)}`}...</p>
          <span className='product--rating'>{handleRating(pr.rating)}</span>
          <span className='product--price' >{`${pr.price}`}$</span>
        </div>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Products;