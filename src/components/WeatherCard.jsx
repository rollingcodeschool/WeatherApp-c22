export default function WeatherCard({ city, country, date, temp, desc, icon }) {
  return (
    <div className="bg-linear-30 from-blue-950 to-slate-950  rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg w-full mt-8">
      <div className="flex-1 flex flex-col items-start">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          {city}, {country}
        </h2>
        <p className="text-slate-400 mb-4">{date}</p>
        <div className="text-6xl font-extrabold text-white mb-2">{temp}°C</div>
        <div className="text-lg text-slate-300 mb-2">{desc}</div>
      </div>
      <div className="flex flex-col items-center">
        <img src={icon} alt="weather icon" className="w-24 h-24 mb-2" />
        <span className="bg-green-600 text-xs px-2 py-1 rounded-full text-white">
          EN VIVO
        </span>
      </div>
    </div>
  );
}
