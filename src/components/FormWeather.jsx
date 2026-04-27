import WeatherCard from "./WeatherCard";
import WeatherStats from "./WeatherStats";
const FormWeather = () => {
  return (
    <>
      <form className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8">
        <div className=" w-full">
          <input
            type="text"
            name="city"
            placeholder="Ej: Madrid"
            className="bg-slate-800 rounded px-4 py-2 text-white focus:outline-none border border-slate-700 w-full"
          />
          <p className="text-sm text-red-500"></p>
        </div>
        <div className=" w-full">
          <select
            name="country code"
            className="bg-slate-800 rounded px-4 py-2 text-white border border-slate-700 w-full"
          >
            <option value="ES">España</option>
            <option value="AR">Argentina</option>
            <option value="MX">Mexico</option>
            <option value="US">Estados Unidos</option>
          </select>
          <p className="text-sm text-red-500"></p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          Buscar
        </button>
      </form>
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
    </>
  );
};

export default FormWeather;
