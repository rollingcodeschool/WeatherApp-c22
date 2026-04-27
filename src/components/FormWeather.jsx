const FormWeather = () => {
  return (
    <form className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8">
      <input
        type="text"
        name='city'
        placeholder="Ej: Madrid"
        className="bg-slate-800 rounded px-4 py-2 text-white focus:outline-none border border-slate-700 w-full"
      />
      <select name='country code' className="bg-slate-800 rounded px-4 py-2 text-white border border-slate-700 w-full">
        <option>España</option>
      </select>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
        Buscar
      </button>
    </form>
  );
};

export default FormWeather;
