import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {clearItemFromCart, addItemToCart, removeItemFromCart} from '../../redux/cart/cart.actions';

import './CheckoutItem.styles.scss';


const CheckoutItem = ({item, clearItemFromCart, addItemToCart, removeItemFromCart}) =>{
    const {imageUrl, name, quantity, price} = item;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
                
                <span className="quantity">
                    <div className="arrow" onClick={() => removeItemFromCart(item)}>&#10094;</div>    
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => addItemToCart(item)}>&#10095;</div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(item)}>&#10008;</div>
        </div>
    )
}


CheckoutItem.propTypes = {
    clearItemFromCart: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) =>({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);