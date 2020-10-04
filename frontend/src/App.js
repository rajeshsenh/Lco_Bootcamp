import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Auth from "./components/pages/Auth";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import PageNotFound from "./components/pages/page-not-found";
import ProductDetail from "./components/pages/ProductDetail";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout" exact>
            <div>checkout</div>
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/contact-us" exact>
            <Contact />
          </Route>
          <Route path="/blog-single" exact>
            <div>blog-single</div>
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/account" exact>
            <div>account</div>
          </Route>
          <Route path="/blog" exact>
            <div>blog</div>
          </Route>
          <Route path="/product-details" exact>
            <ProductDetail />
          </Route>
          <Route path="/wishlist" exact>
            <div>whistlist</div>
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
