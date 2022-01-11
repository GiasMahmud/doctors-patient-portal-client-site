import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51KFLZIBRSQSRESeuIaGSzsYZoHOt1DZ6bUierbAgTa69Cr2WNVrBfMpkFjzufodbrVHfXH8Po4gdF1W26pcbjtbI00LZbIrcZq')

const Payment = () => {

    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://ancient-waters-67122.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);

    return (
        <div>
        <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
        <h4>Pay: ${appointment.price}</h4>
        {appointment?.price && <Elements stripe={stripePromise}>
            <CheckoutForm
                appointment={appointment}
            />
        </Elements>}
    </div>
    );
};

export default Payment;