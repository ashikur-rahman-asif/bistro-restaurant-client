// import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckOutFrom from './CheckOutFrom';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise= loadStripe(import.meta.env.VITE_Payment_Gateway)
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price= parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading="please provide" heading="Payment"></SectionTitle>
            <h2 className='text-3xl'>Tk tk tumi uira uira asho</h2>
            <Elements stripe={stripePromise}><CheckOutFrom price={price}>

            </CheckOutFrom></Elements>
        </div>
    );
};

export default Payment;