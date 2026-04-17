import { Link } from 'react-router-dom';
import { HiShieldCheck, HiFingerPrint, HiLockClosed } from "react-icons/hi2";

export default function Home() {
  const sections = [
    { 
      path: '/elementary', 
      title: 'Digital Detectives', 
      icon: <HiShieldCheck />, 
      accent: 'text-emerald-500', 
      desc: 'Grades 1-5: Learn password secrets and how to stay safe from "Online Strangers."' 
    },
    { 
      path: '/middle', 
      title: 'Cyber Guardians', 
      icon: <HiFingerPrint />, 
      accent: 'text-blue-600', 
      desc: 'Grades 6-8: Defend your identity, spot phishing, and manage your digital footprint.' 
    },
    { 
      path: '/high', 
      title: 'Security Architects', 
      icon: <HiLockClosed />, 
      accent: 'text-indigo-700', 
      desc: 'Grades 9-12: Master encryption, network safety, and professional defense tools.' 
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="w-full max-w-6xl">
        <header className="py-24 px-4 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full text-slate-500 text-[10px] font-black uppercase tracking-widest mb-8">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            2026 Cyber-Safety Initiative
          </div>
          <h1 className="text-8xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
            CYBER <span className="text-indigo-600">LEARN</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            AI-powered cybersecurity training for students. Secure your future, one lesson at a time.
          </p>
        </header>

        <main className="px-4 pb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Link key={section.path} to={section.path} className="group p-8 rounded-[32px] bg-white border-2 border-slate-50 hover:border-indigo-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-slate-50 ${section.accent} group-hover:bg-slate-900 group-hover:text-white transition-all duration-300`}>
                  {section.icon}
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{section.title}</h2>
                <p className="text-slate-500 leading-relaxed font-medium mb-8">{section.desc}</p>
                <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${section.accent} flex items-center gap-2`}>Begin Training <span>→</span></div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}