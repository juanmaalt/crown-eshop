import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import './CartDropdown.styles.scss';

import {CustomButton} from '../../customButton/CustomButton.component';
import {CartItem} from '../cartItem/CartItem.component';
import {selectCartItems} from '../../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? 
                (cartItems.map(item => <CartItem key={item.id} item={item}/>)) 
                :
                (<span className="empty-message">Your cart is empty</span>)
            }
        </div>
        <CustomButton 
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden())
                }
            }>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

CartDropdown.propTypes = {
    cartItems: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps,null)(CartDropdown));