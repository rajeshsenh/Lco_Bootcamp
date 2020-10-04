import React from "react";

import Header from "../Header";
import Slider from "../Slider";
import Category from "../Category";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Category />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
