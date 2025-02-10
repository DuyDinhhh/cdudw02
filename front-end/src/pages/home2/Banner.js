import React from 'react'

const Banner = () => {
    return (
        <section class="padding-bottom">
            <div class="row">
                <aside class="col-md-6">
                    <div class="card card-banner-lg bg-dark">
                        <img src={require("../../assets/images/banners/banner4.jpg")}
                            class="card-img opacity" />
                        <div class="card-img-overlay text-black">
                            <h2 class="card-title">Big Deal on Clothes</h2>
                            <p class="card-text" style={{ maxWidth: "80%" }}>This is a wider card with text below and Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab quae nihil praesentium impedit libero possimus id vero</p>
                            <a href="#" class="btn btn-light">Discover</a>
                        </div>
                    </div>
                </aside>
                <div class="col-md-6">
                    <div class="card card-banner-lg bg-dark">
                        <img src={require("../../assets/images/banners/banner4.jpg")}
                            class="card-img opacity" />
                        <div class="card-img-overlay text-white">
                            <h2 class="card-title">Great Bundle for You</h2>
                            <p class="card-text" style={{ maxWidth: "80%" }}>Card with text below and Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab quae nihil praesentium impedit libero possimus id vero</p>
                            <a href="#" class="btn btn-light">Discover</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner