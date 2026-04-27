import Footer from "./components/Footer";
import FormWeather from "./components/FormWeather";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white font-sans">
      <Navbar />

      <main className="grow max-w-2xl mx-5 md:mx-auto">
        <FormWeather />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
