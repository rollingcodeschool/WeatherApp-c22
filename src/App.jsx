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
        <WeatherCard
          city="Madrid"
          country="España"
          date="Lunes, 12 de Junio"
          temp={24}
          desc="Parcialmente Nublado"
          icon="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        />

        <WeatherStats
          max={28}
          min={16}
          humidity={45}
          pressure={1013}
          uv="6 - Alto"
          wind="12 km/h Noroeste (NW)"
          visibility="10 km"
          precipitation="0 mm"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
