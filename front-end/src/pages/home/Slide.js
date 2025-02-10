import React from 'react';
import "../../assets/js/bootstrap.bundle.min.js"
const Slider = () => (
    <section className="section-main padding-y">
        <main className="card">
         <h1 className='text-center'>THỜI TRANG NỮ</h1>
            <div className="card-body">

                <div className="row" style={{margin:"0 auto"}}>
                    {/* <aside className="col-lg col-md-3 flex-lg-grow-0">
                        <nav className="nav-home-aside">
                            <h6 className="title-category">MY MARKETS <i className="d-md-none icon fa fa-chevron-down"></i></h6>
                            <ul className="menu-category">
                                <li><a href="#">Fashion and clothes</a></li>
                                <li><a href="#">Automobile and motors</a></li>
                                <li><a href="#">Gardening and agriculture</a></li>
                                <li><a href="#">Electronics and tech</a></li>
                                <li><a href="#">Packaginf and printing</a></li>
                                <li><a href="#">Home and kitchen</a></li>
                                <li><a href="#">Digital goods</a></li>
                                <li className="has-submenu"><a href="#">More items</a>
                                    <ul className="submenu">
                                        <li><a href="#">Submenu name</a></li>
                                        <li><a href="#">Great submenu</a></li>
                                        <li><a href="#">Another menu</a></li>
                                        <li><a href="#">Some others</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </aside> */}
                    <div className="col-md-12 col-xl-12 col-lg-12">
                        <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel1_indicator" data-slide-to="0" className=""></li>
                                <li data-target="#carousel1_indicator" data-slide-to="1" className="active"></li>
                                <li data-target="#carousel1_indicator" data-slide-to="2" className=""></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={require("../../assets/images/banners/slide15.jpg")} alt="First slide" />
                                </div>
                                <div className="carousel-item ">
                                    <img src={require("../../assets/images/banners/slide15.jpg")} />
                                </div>
                                <div className="carousel-item">
                                    <img src={require("../../assets/images/banners/slide15.jpg")} />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>

                    {/* <div className="col-md d-none d-lg-block flex-grow-1">
                        <aside className="special-home-right">
                            <h6 className="bg-blue text-center text-white mb-0 p-2">Popular category</h6>

                            <div className="card-banner border-bottom">
                                <div className="py-3" style={{ width: "80%" }}>
                                    <h6 className="card-title">Men clothing</h6>
                                    <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                                </div>
                                <img src={require("../../assets/images/items/1.jpg")} height="80" className="img-bg" />
                            </div>

                            <div className="card-banner border-bottom">
                                <div className="py-3" style={{ width: "80%" }}>
                                    <h6 className="card-title">Winter clothing </h6>
                                    <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                                </div>
                                <img src={require("../../assets/images/items/2.jpg")} height="80" className="img-bg" />
                            </div>

                            <div className="card-banner border-bottom">
                                <div className="py-3" style={{ width: "80%" }}>
                                    <h6 className="card-title">Home inventory</h6>
                                    <a href="#" className="btn btn-secondary btn-sm"> Source now </a>
                                </div>
                                <img src={require("../../assets/images/items/6.jpg")} height="80" className="img-bg" />
                            </div>

                        </aside>
                    </div> */}
                </div>

            </div>
        </main>

    </section>
);
export default Slider