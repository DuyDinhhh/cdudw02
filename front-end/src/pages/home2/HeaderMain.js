import React from 'react'
import DropDown from "../../layouts/DropDown"
function HeaderMain() {
  return (
    <header class="section-header">

      <nav class="navbar d-none d-md-flex p-md-0 navbar-expand-sm navbar-light border-bottom">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTop4">
            <ul class="navbar-nav mr-auto">
              <li><span class="nav-link">Hi, <a href="#"> Sign in </a> or <a href="#"> Register </a></span></li>
              <li><a href="#" class="nav-link"> Deals </a></li>
              <li><a href="#" class="nav-link"> Sell </a></li>
              <li><a href="#" class="nav-link"> Help </a></li>
            </ul>
            <ul class="navbar-nav">
              <li><a href="#" class="nav-link"> <img src={require("../../assets/images/icons/flags/US.png")}
                height="16" /> Ship to </a></li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">   Watchlist </a>
                <ul class="dropdown-menu small">
                  <li><a class="dropdown-item" href="#">First item</a></li>
                  <li><a class="dropdown-item" href="#">Second item</a></li>
                  <li><a class="dropdown-item" href="#">Third item </a></li>
                </ul>
              </li>
              <li><a href="#" class="nav-link"> My shop </a></li>
              <li><a href="#" class="nav-link"> <i class="fa fa-bell"></i> </a></li>
              <li><a href="#" class="nav-link"> <i class="fa fa-shopping-cart"></i> </a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <section class="header-main border-bottom">
          <div class="row row-sm">
            <div class="col-6 col-sm col-md col-lg  flex-grow-0">
              <a href="http://bootstrap-ecommerce.com" class="brand-wrap">
                <img class="logo" src="images/logo.svg" />
              </a>
            </div>
            <div class="col-6 col-sm col-md col-lg flex-md-grow-0">


              <div class="d-md-none float-right">
                <a href="#" class="btn btn-light"> <i class="fa fa-bell"></i> </a>
                <a href="#" class="btn btn-light"> <i class="fa fa-user"></i> </a>
                <a href="#" class="btn btn-light"> <i class="fa fa-shopping-cart"></i> 2 </a>
              </div>


              <div class="category-wrap d-none dropdown d-md-inline-block">
                <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown">   Shop by
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Machinery / Mechanical Parts / Tools </a>
                  <a class="dropdown-item" href="#">Consumer Electronics / Home Appliances </a>
                  <a class="dropdown-item" href="#">Auto / Transportation</a>
                  <a class="dropdown-item" href="#">Apparel / Textiles / Timepieces </a>
                  <a class="dropdown-item" href="#">Home & Garden / Construction / Lights </a>
                  <a class="dropdown-item" href="#">Beauty & Personal Care / Health </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl col-md-5 col-sm-12 flex-grow-1">
              <form action="#" class="search-header">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search" />
                  <select class="custom-select border-left" name="category_name">
                    <option value="">All type</option><option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col col-lg col-md flex-grow-0">
              <button class="btn btn-block btn-primary" type="submit"> Search </button>
            </div>
            <div class="col col-lg col-md flex-grow-0">
              <button class="btn btn-block btn-light" type="submit"> Advanced </button>
            </div>
          </div>
        </section>


        <nav class="navbar navbar-main navbar-expand pl-0">
          <ul class="navbar-nav flex-wrap">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <DropDown />
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Electronics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fashion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Beauty</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Motors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gardening</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Deals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Under $10</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default HeaderMain