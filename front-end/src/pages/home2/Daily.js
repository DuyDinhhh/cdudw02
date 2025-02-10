import React from 'react'

const Daily = () => {
    return (
        <section class="padding-bottom">

            <header class="section-heading mb-4">
                <h3 class="title-section">Daily deals</h3>
            </header>

            <div class="row row-sm">
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div href="#" class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap">
                            <b class="badge badge-danger mr-1">10% OFF</b>
                            <img src={require("../../assets/images/items/3.jpg")} />
                        </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price-wrap">
                                <span class="price">$45</span>
                                <del class="price-old">$90</del>
                            </div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div href="#" class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap">
                            <b class="badge badge-danger mr-1">85% OFF</b>
                            <img src={require("../../assets/images/items/3.jpg")} />
                        </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price-wrap">
                                <span class="price">$45</span>
                                <del class="price-old">$90</del>
                            </div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div href="#" class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap">
                            <b class="badge badge-danger mr-1">10% OFF</b>
                            <img src={require("../../assets/images/items/3.jpg")} />
                        </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Great product name here</a>
                            <div class="price-wrap">
                                <span class="price">$45</span>
                                <del class="price-old">$90</del>
                            </div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div href="#" class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap">
                            <b class="badge badge-danger mr-1">90% OFF</b>
                            <img src={require("../../assets/images/items/3.jpg")} />
                        </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price-wrap">
                                <span class="price">$45</span>
                                <del class="price-old">$90</del>
                            </div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div href="#" class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap">
                            <b class="badge badge-danger mr-1">20% OFF</b>
                            <img src={require("../../assets/images/items/3.jpg")} />
                        </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price-wrap">
                                <span class="price">$45</span>
                                <del class="price-old">$90</del>
                            </div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div href="#" class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap">
                            <b class="badge badge-danger mr-1">20% OFF</b>
                            <img src={require("../../assets/images/items/3.jpg")} />
                        </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price-wrap">
                                <span class="price">$45</span>
                                <del class="price-old">$90</del>
                            </div>
                        </figcaption>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Daily