import React from 'react'
import Wishlist from '../pages/profile/Wishlist'

const ProfileWishList = () => {
    return (
        <>
            <section class="section-pagetop bg-gray">
                <div class="container">
                    <h2 class="title-page">My account</h2>
                </div>
            </section>
            <div class="container">
                <Wishlist />
            </div>
        </>
    )
}

export default ProfileWishList