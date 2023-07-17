// Component imports
import Conditions from "./components/Conditions/Conditions";
import Footer from "./components/Footer/Footer";
import Forecast from "./components/Forecast/Forecast";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="min-h-screen bg-background text-principal-color px-10 lg:px-80 font-thin flex flex-col gap-11">
      <Header />
      <Weather />
      <Forecast />
      <Conditions />
      <Footer />
    </div>
  );
}

export default App;
