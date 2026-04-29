import { useForm } from "react-hook-form";
import WeatherCard from "./WeatherCard";
import WeatherStats from "./WeatherStats";
import { useState } from "react";
const FormWeather = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [climaData, setClimaData] = useState({});

  const buscarClima = (data) => {
    console.log(data);
    consultarAPI(data.city, data.country);
  };
  const api = import.meta.env.VITE_WEATHER_API_KEY;

  const consultarAPI = async (city, country) => {
    try {
      // https://api.openweathermap.org/data/2.5/weather?q=San%20Miguel%20de%20Tucum%C3%A1n,AR&appid={APIKEY}&units=metric&lang=es
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}&units=metric&lang=es`,
      );
      if (response.ok) {
        const clima = await response.json();
        console.log(clima);
        setClimaData(clima);
      } else {
        alert("ocurrio un error");
        setClimaData({});
      }
      console.log(response);
    } catch (error) {
      console.error(error)
      alert('Ocurrio un error, vuelve a intentarlo en unos minutos')
    }
  };

  return (
    <>
      <form
        className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8"
        onSubmit={handleSubmit(buscarClima)}
      >
        <div className=" w-full">
          <input
            type="text"
            name="city"
            placeholder="Ej: Madrid"
            className="bg-slate-800 rounded px-4 py-2 text-white focus:outline-none border border-slate-700 w-full"
            {...register("city", { required: "La ciudad es obligatoria" })}
          />
          <p className="text-sm text-red-500">{errors.city?.message}</p>
        </div>
        <div className=" w-full">
          <select
            name="country code"
            className="bg-slate-800 rounded px-4 py-2 text-white border border-slate-700 w-full"
            {...register("country", { required: "El pais es obligatorio" })}
          >
            <option value="ES">España</option>
            <option value="AR">Argentina</option>
            <option value="MX">Mexico</option>
            <option value="US">Estados Unidos</option>
          </select>
          <p className="text-sm text-red-500">{errors.country?.message}</p>
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
