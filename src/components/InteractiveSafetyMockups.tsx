import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ListTodo,
  Clock,
  Volume2,
  AlertTriangle,
  ShieldCheck,
  BrainCircuit,
  Timer,
  Pause,
  Play,
  RotateCcw,
  Users,
  ThumbsUp,
  Star,
  Heart,
  Gift,
  Sparkles,
  Plus,
} from 'lucide-react';
import {
  INITIAL_SAFETY_ITEMS,
  SafetyChecklistItem,
  calculateSafetyCompletion,
} from '../utils/abaEngine';

const ROOMS: SafetyChecklistItem['room'][] = [
  'Living Room',
  'Kitchen & Dining',
  'Bedroom & Bath',
];

export const SafetyAuditMockup: React.FC = () => {
  const [items, setItems] = useState<SafetyChecklistItem[]>(INITIAL_SAFETY_ITEMS);
  const [selectedRoom, setSelectedRoom] = useState<SafetyChecklistItem['room']>('Living Room');

  const roomStats = calculateSafetyCompletion(items, selectedRoom);
  const totalStats = calculateSafetyCompletion(items);
  const roomItems = items.filter((item) => item.room === selectedRoom);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  return (
    <div
      data-testid="safety-audit-mockup"
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 w-full shadow-lg text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="bg-emerald-100 dark:bg-emerald-950/80 p-2 rounded-lg">
            <ListTodo className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
              Interactive Home Safety Audit
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
              Overall Home Score: {totalStats.completedCount}/{totalStats.totalCount} ({totalStats.percentage}%)
            </p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
          {roomStats.percentage}%
        </span>
      </div>

      {/* Room Filter Tabs */}
      <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 mb-4">
        {ROOMS.map((room) => {
          const active = room === selectedRoom;
          return (
            <button
              key={room}
              type="button"
              onClick={() => setSelectedRoom(room)}
              className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-all truncate cursor-pointer ${
                active
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {room.split(' ')[0]}
            </button>
          );
        })}
      </div>

      {/* Checklist Items */}
      <div className="space-y-2.5">
        {roomItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => toggleItem(item.id)}
            className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
              item.completed
                ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-900/50'
                : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/70 dark:border-slate-700/70 hover:border-brand-400'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                item.completed
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'
              }`}
            >
              {item.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
            </div>
            <div className="flex-1 min-w-0">
              <div
                className={`text-xs font-semibold leading-snug transition-colors ${
                  item.completed
                    ? 'text-slate-500 dark:text-slate-400 line-through'
                    : 'text-slate-800 dark:text-slate-100'
                }`}
              >
                {item.task}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                {item.abaRationale}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export const VisualRoutinePlayground: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    {
      time: '5:30 PM',
      title: 'Clean Up Toys',
      cue: 'First: Put blocks in blue bin',
      reward: '+1 Star Token',
      tip: 'Use a 3-minute visual sand timer and offer choice of cleanup song.',
    },
    {
      time: '6:00 PM',
      title: 'Family Dinner',
      cue: 'Sit at table for 15 minutes',
      reward: '+2 Star Tokens',
      tip: 'Place one preferred "safe food" alongside family meal to reduce mealtime escape.',
    },
    {
      time: '6:45 PM',
      title: 'Warm Bath & Teeth',
      cue: 'Follow 4-step laminated wall strip',
      reward: '+1 Star Token',
      tip: 'Deliver immediate praise for transitioning into bathroom on first cue.',
    },
    {
      time: '7:30 PM',
      title: 'Story & Lights Out',
      cue: 'Then: Pick 2 bedtime books',
      reward: 'Full 5-Star Reward Unlocked',
      tip: 'Dim lights 20 minutes prior to cue automatic melatonin & sensory calm.',
    },
  ];

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-1">
            Interactive Visual Schedule Preview
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
            Evening First/Then Routine Builder
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Clock className="w-4 h-4 text-brand-500" />
          <span>Click any routine step to preview BCBA coaching guidance</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {steps.map((step, i) => {
          const isCurrent = i === activeStep;
          const isDone = i < activeStep;
          return (
            <button
              key={step.time}
              type="button"
              onClick={() => setActiveStep(i)}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isCurrent
                  ? 'bg-brand-50/80 dark:bg-brand-950/50 border-brand-500 dark:border-brand-500 shadow-sm'
                  : isDone
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'
                  : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold tabular-nums text-brand-600 dark:text-brand-400">
                    {step.time}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {isDone ? 'Completed' : isCurrent ? 'Active Step' : `Step 0${i + 1}`}
                  </span>
                </div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">{step.cue}</p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <div className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 mb-1">
                  {step.reward}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  {step.tip}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const ABCMockup: React.FC = () => {
  const [step, setStep] = useState(0);
  const [autoCycle, setAutoCycle] = useState(true);

  useEffect(() => {
    if (!autoCycle) return;
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 2600);
    return () => clearInterval(interval);
  }, [autoCycle]);

  const steps = [
    {
      code: 'A',
      label: 'Antecedent (Trigger)',
      desc: 'Loud blender starts suddenly in kitchen',
      detail: 'Environmental sensory trigger occurs before behavior.',
      color: 'bg-indigo-600',
      icon: Volume2,
    },
    {
      code: 'B',
      label: 'Behavior (Action)',
      desc: 'Covers ears & taps "Break Card" on counter',
      detail: 'Observable replacement behavior instead of bolting.',
      color: 'bg-brand-600',
      icon: AlertTriangle,
    },
    {
      code: 'C',
      label: 'Consequence (Outcome)',
      desc: 'Given noise-canceling headphones + praised',
      detail: 'Reinforces safe functional communication immediately.',
      color: 'bg-emerald-600',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 w-full max-w-md mx-auto transition-colors duration-300">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            Interactive ABC Data Chain
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tap any stage to inspect contingency flow
          </p>
        </div>
        <button
          type="button"
          onClick={() => setAutoCycle((a) => !a)}
          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
        >
          {autoCycle ? 'Pause Auto' : 'Auto Play'}
        </button>
      </div>

      <div className="space-y-3 relative">
        {steps.map((s, i) => {
          const isActive = step === i;
          const Icon = s.icon;
          return (
            <button
              key={s.code}
              type="button"
              onClick={() => {
                setAutoCycle(false);
                setStep(i);
              }}
              className={`w-full text-left relative flex items-start gap-3.5 p-3.5 rounded-xl border transition-all cursor-pointer ${
                isActive
                  ? 'bg-slate-50 dark:bg-slate-800/90 border-brand-500/70 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200/70 dark:border-slate-800 opacity-75 hover:opacity-100'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white transition-transform ${
                  isActive ? `${s.color} scale-105` : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-0.5">
                  {s.code} · {s.label}
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {s.desc}
                </div>
                {isActive && (
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {s.detail}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const SensoryMockup: React.FC = () => {
  const [phase, setPhase] = useState<'Inhale (4s)' | 'Hold (2s)' | 'Exhale (4s)'>('Inhale (4s)');

  useEffect(() => {
    const phases: ('Inhale (4s)' | 'Hold (2s)' | 'Exhale (4s)')[] = [
      'Inhale (4s)',
      'Hold (2s)',
      'Exhale (4s)',
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setPhase(phases[idx]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-6 sm:p-8 w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-[290px] relative overflow-hidden">
      <div className="w-full flex items-center justify-between mb-4">
        <h4 className="font-bold text-slate-100 text-sm">Co-Regulation Breathing Pacer</h4>
        <span className="text-xs font-mono text-purple-300 tabular-nums">Sensory Tool</span>
      </div>

      <div className="relative flex items-center justify-center w-32 h-32 my-4">
        <motion.div
          animate={{ scale: [1, 1.45, 1], opacity: [0.3, 0.12, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-purple-500 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0.25, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute inset-4 bg-purple-400 rounded-full"
        />
        <div className="relative w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <BrainCircuit className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="mt-3 text-purple-200 text-sm font-semibold tracking-wide">
        {phase}
      </div>
      <p className="text-xs text-slate-400 mt-1 text-center">
        Visual pacing lowers heart rate during sensory overload
      </p>
    </div>
  );
};

export const EscapeMockup: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [isPaused, setIsPaused] = useState(false);
  const [breaksRequested, setBreaksRequested] = useState(1);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 180));
    }, 1000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 w-full max-w-md mx-auto transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            FCT Visual Task Timer
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Replaces task elopement with functional break requests
          </p>
        </div>
        <Timer className="w-5 h-5 text-rose-500 shrink-0" />
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-5 text-center border border-slate-200/70 dark:border-slate-800 relative overflow-hidden">
        <div className="text-4xl font-mono font-bold text-slate-900 dark:text-white tabular-nums mb-1">
          {mins}:{secs}
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {isPaused ? 'Break Active — Timer Paused Safely' : 'Until Scheduled Break Time'}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsPaused((p) => !p);
              if (!isPaused) setBreaksRequested((b) => b + 1);
            }}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-4 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            <span>{isPaused ? 'Resume Task' : 'I Need a Break'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSecondsLeft(180);
              setIsPaused(false);
            }}
            aria-label="Reset task timer"
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
          Appropriate Break Requests Honored Today: <strong className="text-slate-800 dark:text-slate-200">{breaksRequested}</strong>
        </div>
      </div>
    </div>
  );
};

export const AttentionMockup: React.FC = () => {
  const [praiseCount, setPraiseCount] = useState(14);
  const [phraseIdx, setPhraseIdx] = useState(0);

  const phrases = [
    '"Thank you for tapping my shoulder gently!"',
    '"I love how calmly you waited while I finished my call!"',
    '"Awesome job sharing the blocks with your sister!"',
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl border border-blue-500/40 p-6 w-full max-w-md mx-auto text-white relative overflow-hidden">
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div>
          <h4 className="font-bold text-sm sm:text-base">Behavior-Specific Praise Bank</h4>
          <p className="text-xs text-blue-100">Catch safe behavior every 5 minutes</p>
        </div>
        <Users className="w-5 h-5 text-blue-200" />
      </div>

      <div className="flex flex-col items-center justify-center py-2 relative z-10 text-center">
        <div className="w-16 h-16 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 mb-4">
          <ThumbsUp className="w-8 h-8 text-white" />
        </div>
        <div className="text-base sm:text-lg font-display font-bold min-h-[3rem] flex items-center justify-center px-2">
          {phrases[phraseIdx]}
        </div>
        <div className="text-xs text-blue-100 mt-1 tabular-nums">
          Positive Attention Deliveries Today: <strong>{praiseCount}</strong>
        </div>

        <button
          type="button"
          onClick={() => {
            setPraiseCount((c) => c + 1);
            setPhraseIdx((idx) => (idx + 1) % phrases.length);
          }}
          className="mt-4 px-4 py-2 rounded-xl bg-white text-indigo-700 font-semibold text-xs hover:bg-blue-50 transition-colors cursor-pointer"
        >
          Deliver Specific Praise (+1)
        </button>
      </div>
    </div>
  );
};

export const TangibleMockup: React.FC = () => {
  const [tokens, setTokens] = useState(3);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 w-full max-w-md mx-auto transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
            Interactive 5-Star Token Board
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Working For: 15 Mins Lego Castle Build
          </p>
        </div>
        <Gift className="w-5 h-5 text-amber-500 shrink-0" />
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200/80 dark:border-slate-800 mb-4">
        <div className="flex justify-between items-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => {
            const earned = i < tokens;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setTokens(i + 1)}
                aria-label={`Set token count to ${i + 1}`}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  earned
                    ? 'bg-amber-400 text-white shadow-xs scale-100'
                    : 'bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-300'
                }`}
              >
                <Star className={`w-5 h-5 ${earned ? 'fill-current text-white' : ''}`} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setTokens((t) => (t < 5 ? t + 1 : 0))}
          className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
            tokens === 5
              ? 'bg-emerald-600 text-white'
              : 'bg-brand-600 hover:bg-brand-700 text-white'
          }`}
        >
          {tokens === 5 ? (
            <>
              <Gift className="w-4 h-4" /> Reward Unlocked! (Click to Reset)
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Award Star Token ({tokens}/5)
            </>
          )}
        </button>
      </div>
    </div>
  );
};
