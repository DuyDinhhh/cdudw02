import React from 'react'
import Paymentpage from '../pages/payment/Payment'
const Payment = () => {
    return (
        <>
            <section class="section-pagetop bg-gray">
                <div class="container">
                    <h2 class="title-page">My account</h2>
                </div>
            </section>
            <div class="container">
                <Paymentpage />
            </div>
        </>
    )
}

export default Payment