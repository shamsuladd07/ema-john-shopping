import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, img, price, shipping, quantity } = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-items-details-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p className='product-price'>Price:{price}</p>
                    <p>Shipping: {shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="delete-container">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;