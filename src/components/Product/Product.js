import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className=''>Seller: {seller}</p>
                <p className>Price: ${price}</p>
                <p className="">Ratings: {ratings} stars</p>
            </div>
            <button className='btn-cart'>
                <p> Add to cart</p></button>
        </div>
    );
};

export default Product;