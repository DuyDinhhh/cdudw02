import React from 'react'
import img from "../../assets/images/banners/banner9.jpg"


const Request = () => {
    return (
        <section class="padding-bottom">

            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Request for Quotation</h4>
            </header>

            <div class="row">
                <div class="col-md-8">
                    <div class="card-banner banner-quote overlay-gradient" style={{ backgroundImage: `url(${img}` }}  >
                        <div class="card-img-overlay white">
                            <h3 class="card-title">An easy way to send request to suppliers</h3>
                            <p class="card-text" style={{ maxWidth: "400px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt.</p>
                            <a href="" class="btn btn-primary rounded-pill">Learn more</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="card card-body">
                        <h4 class="title py-3">One Request, Multiple Quotes</h4>
                        <form>
                            <div class="form-group">
                                <input class="form-control" name="" placeholder="What are you looking for?" type="text" />
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <input class="form-control" placeholder="Quantity" name="" type="text" />

                                    <select class="custom-select form-control">
                                        <option>Pieces</option>
                                        <option>Litres</option>
                                        <option>Tons</option>
                                        <option>Gramms</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group text-muted">
                                <p>Select template type:</p>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option1" />
                                    <span class="form-check-label">Request price</span>
                                </label>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2" />
                                    <span class="form-check-label">Request a sample</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-warning">Request for quote</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Request