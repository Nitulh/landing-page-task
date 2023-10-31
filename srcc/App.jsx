import "./App.css";
import Navigation from "./components/navigation";
// import Section from "./components/section";
import Footer from "./components/footer";
import InfiniteMarq from "./components/infiniteMarq";
import Head from "./components/head";
import About from "./components/about";
import Feature from "./components/feature";
// import Cube from "./components/cube";
import Empty from "./components/empty";
import Testimonial from "./components/testimonial";
import Products from "./components/products";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Service from "./components/services";
import CallToAction from "./components/callToAction";
import { Element } from "react-scroll";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Element id="section1">
        <Head />
      </Element>
      {/* <Section
        title="Welcome to Our Website"
        content="Discover our amazing products and services."
      />
      <Section
        title="About Us"
        content="Learn about our company and mission."
      /> */}

      <InfiniteMarq />
      {/* <Empty/> */}

      <About />
      <Feature />
      {/* <Cube/> */}
      <Element id="section2">
        <Empty />
      </Element>
      <Element id="section3">
      <Service />
      </Element>
      {/* <Section
        title="Features"
        content="Explore the incredible features of our products."
      /> */}
       <Element id="section4">
      <Testimonial />
       </Element>
      {/* <Section
        title="Testimonials"
        content="See what our customers have to say about us."
      /> */}
 <Element id="section5">
      <Products />
 </Element>
      {/* <Section title="Products" content="Browse our wide range of products." /> */}
      <Element id="section6">
      <Pricing />
      </Element>
      {/* <Section title="Pricing" content="Choose a plan that suits your needs." /> */}
      <Element id="section7">
      <Contact />
      </Element>
      {/* <Section
        title="Contact Us"
        content="Get in touch with our friendly team."
      /> */}
<Element id="section8">
      <CallToAction />
</Element>
      {/* <Section
        title="Subscribe to Our Newsletter"
        content="Stay updated with our latest news and offers."
      /> */}
      <Element id="section9">
      <Footer />
      </Element>
    </div>
  );
}

export default App;
