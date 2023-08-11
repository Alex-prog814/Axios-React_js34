import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({ getOneProduct, oneProduct, updateProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if(oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    };
  }, [oneProduct, ]);

  function saveChanges() {
    let editedProduct = {
      title,
      price,
      image
    };
    updateProduct(id, editedProduct);
  };

  return (
    <div>
      <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} />
      <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} value={price} />
      <input type="url" placeholder="Image" onChange={e => setImage(e.target.value)} value={image} />

      <Link to="/">
        <button onClick={saveChanges}>Save</button>
      </Link>
    </div>
  )
}

export default EditForm