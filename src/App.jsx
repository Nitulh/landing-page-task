import "./App.css";
import Navigation from "./components/navigation";
import Section from "./components/section";
import Footer from "./components/footer";
import InfiniteMarq from "./components/infiniteMarq";
import Head from "./components/head";
import About from "./components/about";
import Feature from "./components/feature";
// import Cube from "./components/cube";
import Empty from "./components/empty";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Head />
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
      <About/>
      <Feature/>
     {/* <Cube/> */}
      {/* <Section
        title="Features"
        content="Explore the incredible features of our products."
      /> */}
      <Empty/>
      <Testimonial/>
      {/* <Section
        title="Testimonials"
        content="See what our customers have to say about us."
      /> */}
      <Section title="Products" content="Browse our wide range of products." />
      <Section title="Pricing" content="Choose a plan that suits your needs." />
      <Section
        title="Contact Us"
        content="Get in touch with our friendly team."
      />
      <Section
        title="Subscribe to Our Newsletter"
        content="Stay updated with our latest news and offers."
      />
      <Footer />
    </div>
  );
}

export default App;
