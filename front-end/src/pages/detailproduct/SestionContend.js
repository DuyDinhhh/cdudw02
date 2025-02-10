import React from 'react'

const SestionContend = () => {
    return (
        <section class="section-name padding-y bg">
            <div class="container">

                <div class="row">
                    <div class="col-md-8">
                        <h5 class="title-description">Description</h5>
                        <p>
                            Lava stone grill, suitable for natural gas, with cast-iron cooking grid, piezo ignition, stainless steel burners, water tank, and thermocouple. Thermostatic adjustable per zone. Comes complete with lava rocks. Adjustable legs. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                        <ul class="list-check">
                            <li>Material: Stainless steel</li>
                            <li>Weight: 82kg</li>
                            <li>built-in drip tray</li>
                            <li>Open base for pots and pans</li>
                            <li>On request available in propane execution</li>
                        </ul>

                        <h5 class="title-description">Specifications</h5>
                        <table class="table table-bordered">
                            <tr> <th colspan="2">Basic specs</th> </tr>
                            <tr> <td>Type of energy</td><td>Lava stone</td> </tr>
                            <tr> <td>Number of zones</td><td>2</td> </tr>
                            <tr> <td>Automatic connection	</td> <td> <i class="fa fa-check text-success"></i> Yes </td></tr>

                            <tr> <th colspan="2">Dimensions</th> </tr>
                            <tr> <td>Width</td><td>500mm</td> </tr>
                            <tr> <td>Depth</td><td>400mm</td> </tr>
                            <tr> <td>Height	</td><td>700mm</td> </tr>

                            <tr> <th colspan="2">Materials</th> </tr>
                            <tr> <td>Exterior</td><td>Stainless steel</td> </tr>
                            <tr> <td>Interior</td><td>Iron</td> </tr>

                            <tr> <th colspan="2">Connections</th> </tr>
                            <tr> <td>Heating Type</td><td>Gas</td> </tr>
                            <tr> <td>Connected load gas</td><td>15 Kw</td> </tr>

                        </table>
                    </div>

                    <aside class="col-md-4">

                        <div class="box">

                            <h5 class="title-description">Files</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <h5 class="title-description">Videos</h5>


                            <article class="media mb-3">
                                <a href="#"><img class="img-sm mr-3" src={require("../../assets/images/posts/1.jpg")} /></a>
                                <div class="media-body">
                                    <h6 class="mt-0"><a href="#">How to use this item</a></h6>
                                    <p class="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
                                </div>
                            </article>

                            <article class="media mb-3">
                                <a href="#"><img class="img-sm mr-3" src={require("../../assets/images/posts/1.jpg")} /></a>
                                <div class="media-body">
                                    <h6 class="mt-0"><a href="#">New tips and tricks</a></h6>
                                    <p class="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
                                </div>
                            </article>

                            <article class="media mb-3">
                                <a href="#"><img class="img-sm mr-3" src={require("../../assets/images/posts/1.jpg")} /></a>
                                <div class="media-body">
                                    <h6 class="mt-0"><a href="#">New tips and tricks</a></h6>
                                    <p class="mb-2"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin </p>
                                </div>
                            </article>



                        </div>
                    </aside>
                </div>

            </div>
        </section>
    )
}

export default SestionContend