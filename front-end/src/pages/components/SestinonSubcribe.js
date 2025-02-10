import React from 'react'

function SestinonSubcribe() {
    return (
        <section class="padding-y-lg bg-light border-top">
            <div class="container">

                <p class="pb-2 text-center">Delivering the latest product trends and industry news straight to your inbox</p>

                <div class="row justify-content-md-center">
                    <div class="col-lg-4 col-sm-6">
                        <form class="form-row">
                            <div class="col-8">
                                <input class="form-control" placeholder="Your Email" type="email" />
                            </div>
                            <div class="col-4">
                                <button type="submit" class="btn btn-block btn-warning"> <i class="fa fa-envelope"></i> Subscribe </button>
                            </div>
                        </form>
                        <small class="form-text">We’ll never share your email address with a third-party. </small>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default SestinonSubcribe