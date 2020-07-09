import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem.component';
import StripeButton from '../../components/stripeButton/stripeButton.component';

import './Checkout.style.scss';

const CheckoutPage = ({cartItems, totalPrice}) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)}
        <div className="total">TOTAL: ${totalPrice}</div>
        <div className="test-warning">
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 10/22 - CVV: 123
        </div>
        <StripeButton price={totalPrice}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartItemsTotal
})

export default connect(mapStateToProps,null)(CheckoutPage);