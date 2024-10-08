import {
  AboutUs,
  Chef,
  Footer,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar, Newsletter } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
