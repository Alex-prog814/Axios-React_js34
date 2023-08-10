import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = ({ getProducts, products }) => {

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container d-flex justify-content-between">
      {products.map(product => (
          <Card key={product.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} height="200" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>

            <Link to={`/edit/${product.id}`}>
              <Button variant="success" className='m-1'>Edit</Button>
            </Link>

            <Link to={`/details/${product.id}`}>
              <Button variant="warning className='m-1'">Details</Button>
            </Link>

            <Button variant="danger" className='m-1'>Delete</Button>
          </Card.Body>
          </Card>
      ))}
    </div>
  )
}

export default ProductList