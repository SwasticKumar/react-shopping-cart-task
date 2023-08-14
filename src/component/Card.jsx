import React, { useState } from 'react';

function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    // <div className='bg-secondary'>
    <div className="card m-2">
        {/* Card img */}
     {cardData.img1 &&(
         <img
         src="/image/green1.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img2 &&(
         <img
         src="/image/tomato2.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img3 &&(
         <img
         src="/image/red-meat1.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img4 &&(
         <img
         src="/image/orange1.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img5 &&(
         <img
         src="/image/fish1.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img6 &&(
         <img
         src="/image/pomegranate1.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img7 &&(
         <img
         src="/image/cabbage1.png"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img8 &&(
         <img
         src="/image/grapes1.png"
         className="card-img-top"
         alt="Product"
       />
     )}
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      {cardData.isSoldout && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Soldout
        </div>
      )}
      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

function CardGrid({ setCartValue }) {
  const cardData = [
    { name: 'Green peas', rating: '⭐⭐⭐⭐⭐', price: '₹250-₹280',img1:true },
    { name: 'Tomato', rating: '⭐⭐⭐⭐⭐', originalPrice: '₹130', price: '₹60', isSpecial: true ,img2:true},
    { name: 'Best Red Meat', rating: '⭐⭐⭐⭐⭐', price: '₹749', isSale: true,img3:true },
    { name: 'Orange', rating: '⭐⭐⭐⭐⭐', price: '₹40-₹80',img4:true },
    { name: 'River Fish',  rating: '⭐⭐⭐⭐⭐',price: '₹349-₹560', isSale: true ,img5:true},
    { name: 'Pomegranate', rating: '⭐⭐⭐⭐⭐', price: '₹140-₹180',img6:true },
    { name: 'Cabbage', rating: '⭐⭐⭐⭐⭐', originalPrice: '₹45', price: '₹18', isSoldout: true,img7:true },
    { name: 'Fresh Grapes', rating: '⭐⭐⭐⭐⭐', price: '₹54',img8:true },
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
