import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'
 
const Details = ({ getOneProduct, oneProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div className="container">
      {oneProduct ? (
        <>
          <div>{oneProduct.title}</div>
          <div>{oneProduct.price}</div>
          <img src={oneProduct.image} alt="error:(" width="250" height="250" />
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  )
}

export default Details