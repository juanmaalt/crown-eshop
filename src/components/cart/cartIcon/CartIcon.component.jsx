import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingBag} from '../../../assets/shop_bag.svg';
import './CartIcon.styles.scss';

import {toggleCartHidden} from '../../../redux/cart/cart.actions';
import {selectCartItemsQty} from '../../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBag className="shopping-bag"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

CartIcon.propTypes = {
    toggleCartHidden: PropTypes.func.isRequired,
    itemCount: PropTypes.number.isRequired
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsQty
})

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);