import { Link, useLocation } from 'react-router-dom';
import { HiShieldCheck, HiFingerPrint, HiLockClosed, HiHome } from "react-icons/hi2";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/elementary', label: 'Detectives', icon: <HiShieldCheck /> },
    { path: '/middle', label: 'Guardians', icon: <HiFingerPrint /> },
    { path: '/high', label: 'Architects', icon: <HiLockClosed /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">
            <HiShieldCheck className="text-xl" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
            Cyber <span className="text-indigo-600">Learn</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                isActive(link.path) ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}