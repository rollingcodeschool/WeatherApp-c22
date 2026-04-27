export default function WeatherStats({
  max,
  min,
  humidity,
  pressure,
  uv,
  wind,
  visibility,
  precipitation,
}) {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-6">
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-1">MÁX / MÍN</div>
          <div className="text-red-400 font-bold">{max}°C</div>
          <div className="text-blue-400 font-bold">{min}°C</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-1">HUMEDAD</div>
          <div className="text-white font-bold">{humidity}%</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-1">PRESIÓN</div>
          <div className="text-white font-bold">{pressure} hPa</div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto mt-6">
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-1">ÍNDICE UV</div>
          <div className="text-yellow-400 font-bold">{uv}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-1">VIENTO</div>
          <div className="text-white font-bold">{wind}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-1">VISIBILIDAD</div>
          <div className="text-white font-bold">{visibility}</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-1">PRECIPITACIÓN</div>
          <div className="text-white font-bold">{precipitation}</div>
        </div>
      </section>
    </>
  );
}
