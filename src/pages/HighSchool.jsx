import { HiLockClosed, HiShieldExclamation, HiCpuChip, HiGlobeAlt } from "react-icons/hi2";

export default function HighSchool() {
  const modules = [
    { title: "Cryptography", icon: <HiLockClosed />, desc: "How data is hidden using math." },
    { title: "Network Defense", icon: <HiGlobeAlt />, desc: "Securing Wi-Fi and cloud systems." },
    { title: "Threat Hunting", icon: <HiShieldExclamation />, desc: "Identifying advanced malware tactics." },
    { title: "Hardware Security", icon: <HiCpuChip />, desc: "Protecting physical chips and devices." }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 uppercase">Security Architects</h1>
          <p className="text-indigo-600 font-bold tracking-widest uppercase text-sm mt-2">Level 03 // Grades 9-12</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="p-8 rounded-[32px] bg-slate-50 border-2 border-slate-100 hover:border-indigo-600 transition-colors cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className="text-4xl text-slate-300 group-hover:text-indigo-600 transition-colors">
                  {m.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">{m.title}</h3>
                  <p className="text-slate-500 font-medium">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}