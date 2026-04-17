import { HiChatBubbleLeftRight, HiDocumentText, HiBeaker } from "react-icons/hi2";

export default function HighSchool() {
  const tools = [
    { title: "Socratic Tutor", desc: "placeholder", icon: <HiChatBubbleLeftRight />, color: "text-indigo-600" },
    { title: "Exam Prep", desc: "placeholder", icon: <HiDocumentText />, color: "text-slate-700" },
    { title: "Lab Assistant", desc: "placeholder", icon: <HiBeaker />, color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-black tracking-tighter text-slate-900 mb-4">GRADES 9-12</h1>
          <p className="text-xl text-slate-500 font-medium">placeholder</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.title} className="p-8 rimport { useState } from 'react';
import { HiShieldExclamation, HiMagnifyingGlass, HiNoSymbol } from "react-icons/hi2";

export default function HighSchool() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Welcome, Architect. Paste a suspicious link or email content here. I'll help you hunt for phishing indicators and social engineering tactics." }
  ]);

  return (
    <div className="min-h-screen bg-white pt-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          <header className="mb-8">
            <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-2 uppercase">Security Architects</h1>
            <p className="text-slate-500 font-medium text-lg italic tracking-tight">Level 3: Professional Network Defense</p>
          </header>

          <div className="p-8 rounded-[32px] bg-slate-50 border-2 border-slate-100 min-h-[400px] shadow-inner">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <HiMagnifyingGlass className="text-indigo-600 text-lg" /> Threat Analysis Workspace
            </h3>
            <textarea 
              className="w-full bg-transparent border-none focus:ring-0 text-xl font-medium text-slate-700 placeholder:text-slate-300 resize-none h-[300px]"
              placeholder="Paste suspicious headers, URLs, or emails here to begin forensic analysis..."
            />
          </div>
        </div>

        <div className="flex flex-col h-[600px] lg:h-auto bg-white border-2 border-slate-100 rounded-[32px] overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 bg-slate-900 flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <HiShieldExclamation />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-tight">Cyber Analyst</p>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Active Scan</p>
            </div>
          </div>

          <div className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium ${
                msg.role === 'ai' ? 'bg-white text-slate-800 border border-slate-100' : 'bg-indigo-600 text-white self-end ml-auto'
              }`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative">
              <input 
                type="text" 
                className="w-full p-3 pl-4 rounded-xl border-2 border-slate-100 focus:border-indigo-600 focus:ring-0 transition-all text-sm font-medium"
                placeholder="Analyze threat..."
              />
              <HiNoSymbol className="absolute right-3 top-3.5 text-slate-300" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}ounded-[32px] border-2 border-slate-50 hover:border-slate-200 transition-all cursor-pointer group">
              <div className={`text-4xl mb-6 ${tool.color} group-hover:scale-110 transition-transform`}>{tool.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-12 rounded-[32px] bg-slate-50 border-2 border-dashed border-slate-200 text-center text-slate-400 font-bold uppercase tracking-widest">
          placeholder
        </div>
      </div>
    </div>
  );
}