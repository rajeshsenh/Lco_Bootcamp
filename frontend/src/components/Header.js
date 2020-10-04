import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i> +2 95 01 88 821
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i> info@domain.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link
                      to={{
                        pathname: "https://google.com",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "https://google.com",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "https://google.com",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "https://google.com",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-dribbble"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "https://google.com",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 clearfix">
              <div className="logo pull-left">
                <Link to="/">
                  <img src="./assets/images/home/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-md-8 clearfix">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/account">
                      <i className="fa fa-user"></i> Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist">
                      <i className="fa fa-star"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/checkout">
                      <i className="fa fa-crosshairs"></i> Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-shopping-cart"></i> Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth">
                      <i className="fa fa-lock"></i> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      Shop<i className="fa fa-angle-down"></i>
                    </Link>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <Link to="/shop">Products</Link>
                      </li>
                      <li>
                        <Link to="/product-details">Product Details</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link to="/auth">Login</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Blog<i className="fa fa-angle-down"></i>
                    </a>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <Link to="/blog">Blog List</Link>
                      </li>
                      <li>
                        <Link to="/blog-single">Blog Single</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
