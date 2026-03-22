import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Type } from '@google/genai';
import { 
  ShieldCheck, 
  Heart, 
  BookOpen, 
  Download, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  ArrowDown,
  CheckCircle2, 
  Activity,
  ListTodo,
  LineChart,
  Clock,
  Sparkles,
  BrainCircuit,
  MessageSquareWarning,
  Lightbulb,
  AlertTriangle,
  Loader2,
  Users,
  Volume2,
  Pause,
  Star,
  Gift,
  Timer,
  ThumbsUp,
  Zap
} from 'lucide-react';

// --- Animated Mockup Components ---

const ChartMockup = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-6 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="h-4 w-24 bg-slate-200 rounded-full mb-2"></div>
          <div className="h-3 w-16 bg-slate-100 rounded-full"></div>
        </div>
        <div className="h-8 w-8 bg-brand-50 rounded-full flex items-center justify-center">
          <LineChart className="w-4 h-4 text-brand-600" />
        </div>
      </div>
      <div className="flex items-end gap-3 h-32 mt-4">
        {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
          <div key={i} className="flex-1 bg-slate-50 rounded-t-md relative group">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              className={`absolute bottom-0 w-full rounded-t-md ${i === 6 ? 'bg-brand-500' : 'bg-brand-200'}`}
            ></motion.div>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center">
              <Activity className="w-3 h-3 text-slate-400" />
            </div>
            <div className="flex-1">
              <div className="h-2.5 w-full bg-slate-100 rounded-full mb-1.5"></div>
              <div className="h-2 w-2/3 bg-slate-50 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChecklistMockup = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 w-full max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
        <div className="bg-emerald-100 p-2 rounded-lg">
          <ListTodo className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 text-sm">Safety Audit</h4>
          <p className="text-xs text-slate-400">Living Room</p>
        </div>
      </div>
      <div className="space-y-4">
        {[
          { text: "Secure heavy furniture", delay: 0.5 },
          { text: "Cover electrical outlets", delay: 1.5 },
          { text: "Remove sharp objects", delay: 2.5 },
          { text: "Install window locks", delay: 3.5 }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay - 0.3 }}
            className="flex items-center gap-3"
          >
            <motion.div 
              initial={{ backgroundColor: "#f8fafc", borderColor: "#e2e8f0" }}
              whileInView={{ backgroundColor: "#10b981", borderColor: "#10b981" }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay + 0.1 }}
              >
                <CheckCircle2 className="w-3 h-3 text-white" />
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ color: "#334155", textDecoration: "none" }}
              whileInView={{ color: "#94a3b8", textDecoration: "line-through" }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="text-sm font-medium"
            >
              {item.text}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const RoutineMockup = () => {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-6 w-full max-w-sm mx-auto text-white">
      <div className="flex items-center justify-between mb-8">
        <h4 className="font-semibold text-slate-100">Evening Routine</h4>
        <Clock className="w-5 h-5 text-brand-400" />
      </div>
      <div className="relative border-l-2 border-slate-800 ml-3 space-y-8">
        {[
          { time: "6:00 PM", task: "Dinner time", active: false },
          { time: "7:00 PM", task: "Bath & brush teeth", active: true },
          { time: "7:30 PM", task: "Reading time", active: false },
          { time: "8:00 PM", task: "Lights out", active: false }
        ].map((step, i) => (
          <div key={i} className="relative pl-6">
            <motion.div 
              animate={{ 
                scale: step.active ? [1, 1.2, 1] : 1,
                backgroundColor: step.active ? "#6366f1" : "#1e293b",
                borderColor: step.active ? "#818cf8" : "#334155"
              }}
              transition={{ repeat: step.active ? Infinity : 0, duration: 2 }}
              className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2"
            />
            <div className={`text-xs font-bold mb-1 ${step.active ? 'text-brand-400' : 'text-slate-500'}`}>
              {step.time}
            </div>
            <div className={`text-sm font-medium ${step.active ? 'text-white' : 'text-slate-400'}`}>
              {step.task}
            </div>
            {step.active && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="mt-3 bg-brand-500/20 border border-brand-500/30 rounded-lg p-3 text-xs text-brand-200"
              >
                Provide positive reinforcement for transitioning to the bathroom smoothly.
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ABCMockup = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Antecedent", desc: "Loud noise starts", color: "bg-indigo-500", icon: Volume2 },
    { label: "Behavior", desc: "Covers ears & cries", color: "bg-brand-500", icon: AlertTriangle },
    { label: "Consequence", desc: "Given headphones", color: "bg-emerald-500", icon: ShieldCheck }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-500 cursor-pointer">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-slate-800">ABC Data Log</h4>
        <Activity className="w-5 h-5 text-slate-400" />
      </div>
      <div className="space-y-4 relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100"></div>
        {steps.map((s, i) => {
          const isActive = step === i;
          const isPast = step > i;
          const Icon = s.icon;
          return (
            <div key={i} className="relative flex items-center gap-4">
              <motion.div 
                animate={{ 
                  backgroundColor: isActive || isPast ? (i===0?"#6366f1":i===1?"#3b82f6":"#10b981") : "#f1f5f9",
                  scale: isActive ? 1.1 : 1
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center z-10 shrink-0 text-white shadow-sm"
              >
                <Icon className={`w-5 h-5 ${isActive || isPast ? 'text-white' : 'text-slate-400'}`} />
              </motion.div>
              <motion.div 
                animate={{ opacity: isActive ? 1 : 0.5, x: isActive ? 5 : 0 }}
                className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-100"
              >
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{s.label}</div>
                <div className="text-sm font-medium text-slate-800">{s.desc}</div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const SensoryMockup = () => {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-8 w-full max-w-sm mx-auto flex flex-col items-center justify-center min-h-[300px] overflow-hidden relative hover:scale-105 transition-transform duration-500 cursor-pointer">
      <h4 className="absolute top-6 left-6 font-bold text-slate-100">Sensory Regulation</h4>
      <div className="relative flex items-center justify-center w-32 h-32 mt-4">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-purple-500 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-4 bg-purple-400 rounded-full"
        />
        <div className="absolute inset-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
          <BrainCircuit className="w-8 h-8 text-white" />
        </div>
      </div>
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8 text-purple-300 text-sm font-medium tracking-widest uppercase"
      >
        Breathe In...
      </motion.div>
    </div>
  );
};

const EscapeMockup = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-500 cursor-pointer">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-slate-800">Task Timer</h4>
        <Timer className="w-5 h-5 text-rose-500" />
      </div>
      <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100 relative overflow-hidden">
        <motion.div 
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 h-1 bg-rose-500"
        />
        <div className="text-4xl font-display font-bold text-slate-800 mb-2">04:59</div>
        <div className="text-sm text-slate-500">Until Break Time</div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-rose-100 text-rose-700 font-bold py-2 px-6 rounded-full text-sm flex items-center gap-2 mx-auto"
        >
          <Pause className="w-4 h-4" /> Request Break
        </motion.button>
      </div>
    </div>
  );
};

const AttentionMockup = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl border border-blue-400 p-6 w-full max-w-sm mx-auto text-white relative overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <h4 className="font-bold">Social Praise</h4>
        <Users className="w-5 h-5 text-blue-200" />
      </div>
      
      <div className="flex flex-col items-center justify-center py-4 relative z-10">
        <div className="relative">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 mb-4">
            <ThumbsUp className="w-10 h-10 text-white" />
          </div>
          <motion.div 
            animate={{ y: [0, -20], opacity: [0, 1, 0], scale: [0.5, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="absolute -top-2 -right-2 text-yellow-300"
          >
            <Star className="w-6 h-6 fill-current" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -30], opacity: [0, 1, 0], scale: [0.5, 1.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
            className="absolute top-4 -left-4 text-rose-300"
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
        </div>
        <div className="text-xl font-display font-bold">"Great Job Sharing!"</div>
        <div className="text-sm text-blue-200 mt-2">Specific, positive attention</div>
      </div>
      
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-900/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
    </div>
  );
};

const TangibleMockup = () => {
  const [tokens, setTokens] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens(t => {
        if (t >= 5) return 0;
        return t + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-500 cursor-pointer">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-slate-800">Token Economy</h4>
        <Gift className="w-5 h-5 text-amber-500" />
      </div>
      
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-6">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">Working For: iPad Time</div>
        <div className="flex justify-between gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-dashed border-slate-300 flex items-center justify-center relative">
              <AnimatePresence>
                {tokens > i && (
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 bg-amber-400 rounded-full flex items-center justify-center shadow-sm"
                  >
                    <Star className="w-5 h-5 text-white fill-current" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      <motion.div 
        animate={{ 
          scale: tokens === 5 ? [1, 1.05, 1] : 1,
          backgroundColor: tokens === 5 ? "#10b981" : "#f1f5f9",
          color: tokens === 5 ? "#ffffff" : "#94a3b8"
        }}
        transition={{ duration: 0.5, repeat: tokens === 5 ? Infinity : 0 }}
        className="w-full py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-colors"
      >
        {tokens === 5 ? <><Gift className="w-5 h-5" /> Reward Unlocked!</> : "Earn 5 stars"}
      </motion.div>
    </div>
  );
};

const ChildlikeAnimations = () => {
  return (
    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 border-t border-slate-100 flex items-end justify-center pb-8">
      {/* Background Clouds */}
      <motion.div animate={{ x: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[15%] text-slate-200 opacity-50">
        <svg width="72" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 19c-2.5 0-4.5-2-4.5-4.5 0-.2.02-.4.05-.6-.5-.2-1.05-.3-1.6-.3-2.5 0-4.5 2-4.5 4.5H5c-3 0-5-2-5-5 0-2.5 1.8-4.6 4.2-5 1.3-2.4 3.8-4 6.8-4 3 0 5.5 1.6 6.8 4 2.4.4 4.2 2.5 4.2 5 0 3-2 5-5 5h-2.5z"/></svg>
      </motion.div>
      <motion.div animate={{ x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-16 right-[20%] text-slate-200 opacity-50">
        <svg width="96" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 19c-2.5 0-4.5-2-4.5-4.5 0-.2.02-.4.05-.6-.5-.2-1.05-.3-1.6-.3-2.5 0-4.5 2-4.5 4.5H5c-3 0-5-2-5-5 0-2.5 1.8-4.6 4.2-5 1.3-2.4 3.8-4 6.8-4 3 0 5.5 1.6 6.8 4 2.4.4 4.2 2.5 4.2 5 0 3-2 5-5 5h-2.5z"/></svg>
      </motion.div>

      {/* Bouncing Blocks */}
      <div className="flex items-end gap-4 z-10">
        <motion.div
          animate={{ y: [0, -40, 0], rotate: [-5, 5, -5] }}
          transition={{ y: { duration: 0.8, repeat: Infinity, ease: "easeOut", repeatType: "reverse" }, rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          className="w-16 h-16 bg-brand-400 rounded-xl shadow-lg border-b-4 border-brand-500 flex items-center justify-center text-white font-display font-bold text-3xl"
        >
          A
        </motion.div>
        <motion.div
          animate={{ y: [0, -50, 0], rotate: [5, -5, 5] }}
          transition={{ y: { duration: 0.9, repeat: Infinity, ease: "easeOut", repeatType: "reverse", delay: 0.2 }, rotate: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
          className="w-16 h-16 bg-emerald-400 rounded-xl shadow-lg border-b-4 border-emerald-500 flex items-center justify-center text-white font-display font-bold text-3xl"
        >
          B
        </motion.div>
        <motion.div
          animate={{ y: [0, -35, 0], rotate: [-5, 5, -5] }}
          transition={{ y: { duration: 0.75, repeat: Infinity, ease: "easeOut", repeatType: "reverse", delay: 0.4 }, rotate: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
          className="w-16 h-16 bg-amber-400 rounded-xl shadow-lg border-b-4 border-amber-500 flex items-center justify-center text-white font-display font-bold text-3xl"
        >
          C
        </motion.div>
      </div>

      {/* Floating Balloon */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[20%] md:left-[30%]"
      >
        <div className="w-14 h-16 bg-rose-400 rounded-[50%] relative shadow-inner">
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-rose-500"></div>
          <svg className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-6 h-12 text-slate-300" viewBox="0 0 10 40" fill="none" stroke="currentColor"><path d="M5 0 Q 10 10 5 20 T 5 40" strokeWidth="1.5" fill="none"/></svg>
        </div>
      </motion.div>

      {/* Spinning Star */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-20 right-[25%] md:right-[35%]"
      >
        <Sparkles className="w-12 h-12 text-amber-300" />
      </motion.div>
    </div>
  );
};

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-100/50 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Heart className="w-3.5 h-3.5" />
                <span>Evidence-Based Parenting</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                <span className="block text-brand-600">Applied Behavior Analysis (ABA)</span> 
                for Child Safety.
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                Transform your home environment and parenting approach with data-driven, compassionate strategies. We translate complex behavioral science into practical, everyday tools for parents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setPage('ai-tools')}
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25"
                >
                  <Sparkles className="w-4 h-4" /> Try AI Behavior Analyst
                </button>
                <button 
                  onClick={() => setPage('methodology')}
                  className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 px-8 py-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
                >
                  View Methodology
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-indigo-50 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-2xl relative">
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Goal Met!</p>
                      <p className="text-[10px] text-slate-500">Safe transition</p>
                    </div>
                  </div>
                </div>
                <ChartMockup />
                <div className="absolute -bottom-8 -right-8 hidden sm:block">
                  <ChecklistMockup />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Practical Tools Built on Behavioral Science
            </h2>
            <p className="text-lg text-slate-600">
              Applied Behavior Analysis (ABA) isn't just theory. It's a systematic approach to understanding and improving behavior. Our tools help you apply these principles to keep your child safe.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 overflow-hidden relative flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1 z-10">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Behavior Tracking & Analysis</h3>
                <p className="text-slate-600 mb-6">
                  Understand the "why" behind behaviors. Track antecedents (triggers), the behavior itself, and consequences (ABC data) to identify patterns and prevent unsafe situations.
                </p>
                <ul className="space-y-3">
                  {['Identify common triggers', 'Track frequency and duration', 'Measure intervention success'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative z-10">
                <ChartMockup />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-600 rounded-3xl p-8 md:p-12 overflow-hidden relative text-white flex flex-col justify-between"
            >
              <div className="z-10 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Proactive Safety</h3>
                <p className="text-brand-100 text-sm leading-relaxed">
                  Modify the environment before behaviors occur. Use our interactive checklists to secure your home based on your child's specific behavioral profile.
                </p>
              </div>
              <div className="z-10">
                <ChecklistMockup />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Childlike Animations Section */}
      <ChildlikeAnimations />
    </motion.div>
  );
};

const MethodologyPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-20 bg-slate-50 min-h-screen pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Science</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
            Understanding ABA Methodology
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Applied Behavior Analysis is a scientific approach to understanding behavior. By looking at the environment and its effect on behavior, we can create meaningful, positive changes.
          </p>
        </div>

        {/* Section 1: The ABCs */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <ABCMockup />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">The ABCs of Behavior</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Every behavior occurs within a context. By breaking down interactions into three distinct parts, we can identify patterns and make proactive changes.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">A</div>
                <div>
                  <h4 className="font-bold text-slate-900">Antecedent</h4>
                  <p className="text-sm text-slate-600">What happens immediately before the behavior. The trigger or environment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center shrink-0">B</div>
                <div>
                  <h4 className="font-bold text-slate-900">Behavior</h4>
                  <p className="text-sm text-slate-600">The observable and measurable action the child takes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0">C</div>
                <div>
                  <h4 className="font-bold text-slate-900">Consequence</h4>
                  <p className="text-sm text-slate-600">What happens immediately after the behavior. This determines if it will happen again.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">The 4 Functions of Behavior</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every behavior happens for a reason. In ABA, we categorize these reasons into four main "functions".
          </p>
        </div>

        {/* Section 2: Sensory */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
              <BrainCircuit className="w-3.5 h-3.5" /> Function 1
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Sensory / Automatic</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sometimes the behavior itself feels good or relieves internal discomfort. This could be rocking, humming, or seeking deep pressure.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Provide safe sensory alternatives</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Teach self-regulation techniques</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-500" /> Modify the environment to reduce overload</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SensoryMockup />
          </motion.div>
        </div>

        {/* Section 3: Escape */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <EscapeMockup />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ArrowRight className="w-3.5 h-3.5" /> Function 2
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Escape / Avoidance</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Behaviors often occur to get away from a task, person, or environment that is aversive, difficult, or overwhelming.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Teach functional communication ("I need a break")</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Break difficult tasks into smaller steps</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-rose-500" /> Use visual timers to show when a task will end</li>
            </ul>
          </motion.div>
        </div>

        {/* Section 4: Attention */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5" /> Function 3
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Attention</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Children may act out to get social interaction or a reaction from others. Remember, even negative attention (like yelling) is still attention.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Provide frequent, positive attention for good behavior</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Ignore the behavior, not the child (planned ignoring)</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-500" /> Teach appropriate ways to ask for attention</li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AttentionMockup />
          </motion.div>
        </div>

        {/* Section 5: Tangible */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <TangibleMockup />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5" /> Function 4
            </div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Tangible</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Behaviors aimed at gaining access to a preferred item, activity, or food. This often happens when a child is told "no" or a preferred item is removed.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Use token economies or reward charts</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Teach waiting and accepting "no"</li>
              <li className="flex items-center gap-3 text-slate-700"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Use "First/Then" statements (First clean up, Then iPad)</li>
            </ul>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

const AIAssistantPage = () => {
  const [antecedent, setAntecedent] = useState('');
  const [behavior, setBehavior] = useState('');
  const [consequence, setConsequence] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!antecedent || !behavior || !consequence) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `You are a Board Certified Behavior Analyst (BCBA). Analyze the following ABC data provided by a parent:
      
      Antecedent (Before): ${antecedent}
      Behavior (During): ${behavior}
      Consequence (After): ${consequence}
      
      Provide a compassionate, professional analysis.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              hypothesizedFunction: { 
                type: Type.STRING, 
                description: "The most likely function: Attention, Escape, Tangible, or Sensory." 
              },
              explanation: { 
                type: Type.STRING,
                description: "A brief, compassionate explanation of why this function is suspected."
              },
              proactiveStrategies: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "2-3 proactive strategies to prevent the behavior."
              },
              reactiveStrategy: { 
                type: Type.STRING,
                description: "1 safe, evidence-based reactive strategy for when the behavior occurs."
              }
            },
            required: ["hypothesizedFunction", "explanation", "proactiveStrategies", "reactiveStrategy"]
          }
        }
      });

      if (response.text) {
        setResult(JSON.parse(response.text));
      } else {
        setError("Failed to generate analysis. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while connecting to the AI. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-20 bg-slate-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powered by Gemini AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            AI Behavior Analyst
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Describe a challenging behavior using the ABC format. Our AI will hypothesize the function of the behavior and suggest proactive, evidence-based strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ListTodo className="w-5 h-5 text-brand-600" /> Enter ABC Data
            </h3>
            <form onSubmit={handleAnalyze} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Antecedent (A)
                </label>
                <p className="text-xs text-slate-500 mb-2">What happened immediately before the behavior? (e.g., "I told him it was time to turn off the iPad.")</p>
                <textarea 
                  value={antecedent}
                  onChange={(e) => setAntecedent(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none h-24"
                  placeholder="Describe the trigger..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Behavior (B)
                </label>
                <p className="text-xs text-slate-500 mb-2">What exactly did the child do? Be specific. (e.g., "He threw the iPad on the floor and screamed.")</p>
                <textarea 
                  value={behavior}
                  onChange={(e) => setBehavior(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none h-24"
                  placeholder="Describe the behavior..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Consequence (C)
                </label>
                <p className="text-xs text-slate-500 mb-2">What happened immediately after? (e.g., "I gave him 5 more minutes to calm him down.")</p>
                <textarea 
                  value={consequence}
                  onChange={(e) => setConsequence(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none h-24"
                  placeholder="Describe the consequence..."
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing Behavior...</>
                ) : (
                  <><BrainCircuit className="w-5 h-5" /> Generate Analysis</>
                )}
              </button>
            </form>
          </div>

          {/* Results Side */}
          <div className="relative h-full min-h-[400px]">
            <AnimatePresence mode="wait">
              {!result && !loading && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <Sparkles className="w-8 h-8 text-slate-300" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-700 mb-2">Awaiting Data</h4>
                  <p className="text-sm text-slate-500 max-w-sm">Fill out the ABC form on the left to receive a personalized behavioral analysis and strategy plan.</p>
                </motion.div>
              )}

              {loading && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100"
                >
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 border-4 border-brand-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-600 rounded-full border-t-transparent animate-spin"></div>
                    <BrainCircuit className="absolute inset-0 m-auto w-8 h-8 text-brand-600 animate-pulse" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Gemini is Analyzing...</h4>
                  <p className="text-sm text-slate-500">Cross-referencing behavioral principles to identify the function.</p>
                </motion.div>
              )}

              {result && !loading && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-brand-100 space-y-8"
                >
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Hypothesized Function</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">
                      {result.hypothesizedFunction}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {result.explanation}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-amber-500" /> Proactive Strategies
                    </h4>
                    <ul className="space-y-3">
                      {result.proactiveStrategies.map((strategy: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
                          <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <MessageSquareWarning className="w-5 h-5 text-rose-500" /> Reactive Strategy
                    </h4>
                    <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {result.reactiveStrategy}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-xs text-slate-400 text-center pt-4">
                    Disclaimer: This AI tool provides educational suggestions based on ABA principles. It does not replace professional medical or behavioral advice from a BCBA.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

const Navbar = ({ page, setPage }: { page: string, setPage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'ai-tools', label: 'AI Assistant' }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button onClick={() => setPage('home')} className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">ABA Safety</span>
          </button>
          
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  page === link.id 
                    ? 'bg-slate-100 text-slate-900' 
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            <button 
              onClick={() => setPage('ai-tools')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Try AI
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map(link => (
                <button 
                  key={link.id}
                  onClick={() => { setPage(link.id); setIsOpen(false); }}
                  className={`block px-4 py-3 text-left text-sm font-medium rounded-lg ${
                    page === link.id ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="bg-brand-600 p-2 rounded-lg text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl text-white">ABA Safety</span>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Applied Behavior Analysis Safety Network.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [page, setPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-200 selection:text-brand-900 flex flex-col">
      <Navbar page={page} setPage={setPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {page === 'home' && <HomePage key="home" setPage={setPage} />}
          {page === 'methodology' && <MethodologyPage key="methodology" />}
          {page === 'ai-tools' && <AIAssistantPage key="ai-tools" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
