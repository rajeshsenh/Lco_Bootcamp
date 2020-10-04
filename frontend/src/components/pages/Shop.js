import React from "react";
import Category from "../Category";
import FeatureItem from "../FeatureItem";

export default function Shop() {
  return (
    <>
      <section id="advertisement">
        <div className="container">
          <img src="./assets/images/shop/advertisement.jpg" alt="" />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Category />
            </div>
            <div className="col-sm-9 padding-right">
              <FeatureItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
