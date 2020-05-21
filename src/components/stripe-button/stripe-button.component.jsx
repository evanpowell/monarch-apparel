import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import imageUrl from '../../assets/logo.svg';

const StripeButton = ({ price }) => {
    const priceInCents = price * 100;
    // const publishableKey = ;

    const onToken = (token) => {
        console.log(token);
        alert('Test Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Monarch Apparel"
            billingAddress
            shippingAddress
            image={imageUrl}
            description={`Your total is ${price}`}
            amount={priceInCents}
            panelLabel="Pay Now"
            token={onToken}
            // stripeKey={publishableKey}
        />
    )
}

export default StripeButton;
