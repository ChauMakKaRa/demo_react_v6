import React, { useEffect, useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '@/config-api';

const style = { layout: 'vertical' };

const PayPalButtonWrapper = ({ currency, amount }) => {
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const [cart, setCart] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user_id = sessionStorage.getItem('id');
                const response = await axios.get(`${api.cart}?user_id=${user_id}`);
                const data = response.data;
                setCart(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{ amount: { value: amount, currency_code: currency } }],
        });
    };

    const onApprove = async (data, actions) => {
        setIsPending(true);
        try {
            await axios.patch(`${api.paypal}?id=${cart[0]._id}`);
            navigate('/ordered');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        return;
    };

    return (
        <>
            {isPending && <div className="spinner" />}
            <PayPalButtons style={style} createOrder={createOrder} onApprove={onApprove} />
        </>
    );
};

export default function PayPal({ amount }) {
    return (
        <div style={{ width: '500px' }}>
            <PayPalScriptProvider options={{ clientId: 'test', components: 'buttons', currency: 'USD' }}>
                <PayPalButtonWrapper currency={'USD'} amount={amount} showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    );
}
