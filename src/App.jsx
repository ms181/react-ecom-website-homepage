import Features from "./Components/Home/Features";
import Header from "./Components/Home/Header";
import Hero from "./Components/Home/Hero";
import Categories from "./Components/Home/Categories";
import TopBar from "./Components/Home/TopBar";
import Featured from "./Components/Home/Featured";
import Offer from "./Components/Home/Offer";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <TopBar />
      {/* Home */}
      <div className="px-24">
        <Header />
        <Hero />
        <Features />
        <Categories />
        <Featured />
        <Offer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
