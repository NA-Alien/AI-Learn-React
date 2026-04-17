import { Link } from 'react-router-dom';
import { HiShieldCheck, HiFingerPrint, HiLockClosed } from "react-icons/hi2";

export default function Home() {
  const sections = [
    { 
      path: '/elementary', 
      title: 'Digital Citizens', 
      icon: <HiShieldCheck />, 
      accent: 'bg-emerald-500', 
      textColor: 'text-emerald-600',
      desc: 'Grades 1-5: The foundations of online respect, privacy, and safety.' 
    },
    { 
      path: '/middle', 
      title: 'Cyber Guardians', 
      icon: <HiFingerPrint />, 
      accent: 'bg-blue-600', 
      textColor: 'text-blue-600',
      desc: 'Grades 6-8: Protecting community identity and spotting social engineering.' 
    },
    { 
      path: '/high', 
      title: 'Security Architects', 
      icon: <HiLockClosed />, 
      accent: 'bg-indigo-600', 
      textColor: 'text-indigo-600',
      desc: 'Grades 9-12: Advanced ethics, encryption, and civic digital defense.' 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Civic Engagement Initiative // 2026
          </div>
          <h1 className="text-8xl font-black tracking-tighter text-slate-900 uppercase leading-none mb-6">
            Cyber <span className="text-indigo-600 font-outline-2">Learn</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Empowering students with the digital literacy needed for modern civic participation and community safety.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((s) => (
            <Link key={s.path} to={s.path} className="group p-10 rounded-[40px] bg-slate-50 border-2 border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500">
              <div className={`w-16 h-16 ${s.accent} rounded-2xl flex items-center justify-center text-3xl text-white mb-8 group-hover:rotate-12 transition-transform shadow-lg`}>
                {s.icon}
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{s.title}</h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-10">{s.desc}</p>
              <div className={`text-xs font-black uppercase tracking-widest ${s.textColor} flex items-center gap-2`}>
                Enter Module <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}