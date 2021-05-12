import GlobalStyle from "./components/GlobalStyles";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
