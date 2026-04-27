const Footer = () => {
  return (
    <footer className="border-t-2 border-white/10 bg-slate-900/40 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] py-5 text-center text-slate-500 mt-16 text-sm">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold">SkyGlass</span> - Tu ventana al clima
        global.
      </p>
      <p className="mt-3">
        Desarrollado con ❤️ por{" "}
        <a href="https://github.com/emiarias">Emilse Arias</a>
      </p>
    </footer>
  );
};

export default Footer;
