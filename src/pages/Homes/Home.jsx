import Blockchains from "./Blockchains";
import Features from "./Features";
import Footer2 from "./Footer2";
import Hero from "./Hero";
import MobileApp from "./MobileApp";
import Navigation from "./Navigation";
import Spaces from "./Spaces";

const Home = () => {
  return (
    <div className="bg-[#060B12]">
      <Navigation />
      <Hero />
      <Features />
      <Spaces />
      {/* <Web3Projects />
        <Web3Projects2 /> */}
      {/* <Web3Users /> */}
      <MobileApp />
      <Blockchains />

      <Footer2 />
    </div>
  );
};

export default Home;
