import React from 'react'

const Payment = () => {
    return (
        <section class="section-content padding-y">
            <div class="container" style={{ maxWidth: "720px" }}
            >

                <div class="card mb-4">
                    <div class="card-body">
                        <h4 class="card-title mb-3">Delivery info</h4>

                        <div class="form-row">
                            <div class="form-group col-sm-6">
                                <label class="js-check box active">
                                    <input type="radio" name="dostavka" value="option1" checked />
                                    <h6 class="title">Standart delivery</h6>
                                    <p class="text-muted">Free by airline within 20 days</p>
                                </label>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="js-check box">
                                    <input type="radio" name="dostavka" value="option1" />
                                    <h6 class="title">Fast delivery</h6>
                                    <p class="text-muted">Extra 20$ will be charged </p>
                                </label>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col form-group">
                                <label>First name</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                            <div class="col form-group">
                                <label>Last name</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="" />
                            </div>
                            <div class="col form-group">
                                <label>Phone</label>
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Country</label>
                                <select id="inputState" class="form-control">
                                    <option> Choose...</option>
                                    <option>Uzbekistan</option>
                                    <option>Russia</option>
                                    <option selected="">United States</option>
                                    <option>India</option>
                                    <option>Afganistan</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label>City</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Adress</label>
                            <textarea class="form-control" rows="2"></textarea>
                        </div>

                    </div>
                </div>


                <div class="card mb-4">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Payment</h4>
                        <form role="form" style={{ maxWidth: "380px" }}
                        >
                            <div class="form-group">
                                <label for="username">Name on card</label>
                                <input type="text" class="form-control" name="username" placeholder="Ex. John Smith" required="" />
                            </div>

                            <div class="form-group">
                                <label for="cardNumber">Card number</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" name="cardNumber" placeholder="" />
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fab fa-cc-visa"></i> &nbsp; <i class="fab fa-cc-amex"></i> &nbsp;
                                            <i class="fab fa-cc-mastercard"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md flex-grow-0">
                                    <div class="form-group">
                                        <label class="hidden-xs">Expiration</label>
                                        <div class="form-inline" style={{ minWidth: "200px" }}>
                                            <select class="form-control" style={{ width: "100px" }}>
                                                <option>MM</option>
                                                <option>01 - Janiary</option>
                                                <option>02 - February</option>
                                                <option>03 - February</option>
                                            </select>
                                            <span style={{ width: "20px", textAlign: "center" }}> / </span>
                                            <select class="form-control" style={{ width: "100px" }}>
                                                <option>YY</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label data-toggle="tooltip" title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
                                        <input class="form-control" required="" type="text" />
                                    </div>
                                </div>
                            </div>
                            <button class="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
                        </form>
                    </div>
                </div>


                <br />

            </div>
        </section>
    )
}

export default Payment