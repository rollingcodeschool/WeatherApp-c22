// import { LuSun } from "react-icons/lu";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full z-50 border-b border-white/10 bg-slate-900/40 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] flex justify-between items-center px-8 py-4 ">
      <div className="text-xl font-bold text-blue-300">SkyGlass</div>
      <nav className="flex gap-4 items-center text-slate-400 ">
        <a
          href="https://openweathermap.org/api/one-call-3?collection=one_call_api_3.0"
          target="blank"
          className="hover:text-slate-200 cursor-pointer transition-colors"
        >
          Doc. Api
        </a>
        {/* <span className="text-xl hover:text-slate-200 cursor-pointer transition-colors">
          <LuSun />
        </span> */}
      </nav>
    </header>
  );
};

export default Navbar;
