import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ItemDetails() {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://jbh-mockserver.onrender.com/items/${itemId}`)
      .then(({ data }) => {
        if (data) {  
          setItemDetails(data);
        } else {
          setItemDetails(null);
        }
      })
      .catch(error => {
        console.error("Error fetching item details:", error);
        setItemDetails(null);
      });
  }, [itemId]);

  return (
    <div className='itemDetails'>
      {itemDetails ? (
        <>
          <h2>{itemDetails.name}</h2>
          <h1>{itemDetails.emoji}</h1>
          <h3>{itemDetails.price}</h3>
        </>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}
