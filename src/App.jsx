import "./App.css";
import Navigation from "./components/navigation";

import Footer from "./components/footer";

import Head from "./components/head";
import Feature from "./components/feature";

import Empty from "./components/empty";
import Testimonial from "./components/testimonial";
import Products from "./components/products";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Service from "./components/services";
import CallToAction from "./components/callToAction";
import { Element } from "react-scroll";
import Copy from "./components/copy";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Element id="section1">
        <Head />
      </Element>

      <Feature />

      <Element id="section2">
        <Empty />
      </Element>
      <Element id="section3">
        <Service />
      </Element>

      <Element id="section4">
        <Testimonial />
      </Element>

      <Element id="section5">
        <Products />
      </Element>

      <Element id="section6">
        <Pricing />
      </Element>

      <Element id="section7">
        <Contact />
      </Element>

      <Element id="section8">
        <CallToAction />
      </Element>

      <Element id="section9">
        <Footer />
      </Element>
      <Copy />
    </div>
  );
}

export default App;
