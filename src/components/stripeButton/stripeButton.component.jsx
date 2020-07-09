import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripeButton.styles.scss';

const StripeButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_HmI2HPVASdDN2bCqa2kNuchk00DYcH697r';

    const onToken = (token) =>{
        console.log(token);
        alert("Payment Succesfully processed");
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;