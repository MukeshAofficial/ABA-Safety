import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  TrendingDown,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import {
  BEHAVIOR_ANALYTICS_DATA,
  calculateEpisodeReduction,
} from '../utils/abaEngine';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const FUNCTION_KEYS = ['all', 'escape', 'tangible', 'sensory', 'attention'] as const;

export const BehaviorAnalyticsMockup: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<(typeof FUNCTION_KEYS)[number]>('all');
  const [activeView, setActiveView] = useState<'trend' | 'timeOfDay'>('trend');

  const data = BEHAVIOR_ANALYTICS_DATA[selectedKey];
  const reduction = calculateEpisodeReduction(data.dailySeries);
  const maxDaily = Math.max(...data.dailySeries, 10);

  return (
    <div
      data-testid="behavior-analytics-mockup"
      className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg overflow-hidden transition-colors duration-300"
    >
      {/* Top Bar */}
      <div className="px-4 sm:px-5 py-3.5 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-100 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
              ABC Pattern & Function Analyzer
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Live 7-day antecedent & consequence correlation
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-[11px] font-medium">
          <button
            type="button"
            onClick={() => setActiveView('trend')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              activeView === 'trend'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Weekly Trend
          </button>
          <button
            type="button"
            onClick={() => setActiveView('timeOfDay')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              activeView === 'timeOfDay'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Peak Hours
          </button>
        </div>
      </div>

      {/* Function Filter Bar */}
      <div className="px-4 sm:px-5 pt-3.5 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {FUNCTION_KEYS.map((key) => {
          const item = BEHAVIOR_ANALYTICS_DATA[key];
          const isSelected = key === selectedKey;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedKey(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer border ${
                isSelected
                  ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.shortLabel}
            </button>
          );
        })}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* 3 Key Telemetry Metrics */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50">
            <div className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
              Episode Reduction
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <TrendingDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="text-lg sm:text-xl font-display font-bold text-emerald-700 dark:text-emerald-300 tabular-nums">
                -{reduction.reductionPct}%
              </span>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
              Avg Duration
            </div>
            <div className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white tabular-nums mt-0.5">
              {data.avgDurationSec}s
            </div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800">
            <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
              Peak Trigger Slot
            </div>
            <div className="text-xs sm:text-sm font-display font-bold text-slate-900 dark:text-white tabular-nums mt-1 truncate">
              {data.peakWindow}
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <AnimatePresence mode="wait">
          {activeView === 'trend' ? (
            <motion.div
              key={`trend-${selectedKey}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800"
            >
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-3">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Daily Behavior Episodes ({data.label})
                </span>
                <span className="font-mono tabular-nums">
                  {reduction.firstDay}/day → {reduction.lastDay}/day
                </span>
              </div>

              <div className="grid grid-cols-7 gap-2 items-end h-28 pt-2">
                {data.dailySeries.map((count, i) => {
                  const heightPct = Math.max(Math.round((count / maxDaily) * 100), 12);
                  const isLast = i === data.dailySeries.length - 1;
                  return (
                    <div key={DAYS[i]} className="flex flex-col items-center h-full justify-end">
                      <span className="text-[10px] font-mono tabular-nums text-slate-600 dark:text-slate-400 mb-1">
                        {count}
                      </span>
                      <div className="w-full h-20 bg-slate-200/60 dark:bg-slate-800 rounded-t-md relative flex items-end overflow-hidden">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${heightPct}%` }}
                          transition={{ duration: 0.45, delay: i * 0.04, ease: 'easeOut' }}
                          className={`w-full rounded-t-md ${
                            isLast
                              ? 'bg-emerald-500 dark:bg-emerald-400'
                              : 'bg-brand-500/85 dark:bg-brand-400/80'
                          }`}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-1">
                        {DAYS[i]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`heat-${selectedKey}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 space-y-2.5"
            >
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Time-of-Day Trigger Concentration
                </span>
                <span className="font-mono tabular-nums">Peak: {data.peakWindow}</span>
              </div>

              <div className="space-y-2">
                {data.hourlyHeat.map((h) => (
                  <div key={h.slot} className="flex items-center gap-2.5 text-xs">
                    <span className="w-12 font-mono text-[11px] text-slate-600 dark:text-slate-400 tabular-nums shrink-0">
                      {h.slot}
                    </span>
                    <div className="flex-1 h-3 bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${h.level}%` }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          h.level >= 75
                            ? 'bg-amber-500'
                            : h.level >= 45
                            ? 'bg-brand-500'
                            : 'bg-emerald-500'
                        }`}
                      />
                    </div>
                    <span className="w-9 text-right font-mono text-[11px] text-slate-600 dark:text-slate-400 tabular-nums shrink-0">
                      {h.level}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actionable Trigger & Replacement Skill Insights */}
        <div className="grid sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800">
            <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Detected Antecedent Trigger</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
              {data.primaryTrigger}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-200/60 dark:border-brand-900/50">
            <div className="flex items-center gap-1.5 font-semibold text-brand-900 dark:text-brand-200 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
              <span>Matched Replacement Skill</span>
            </div>
            <p className="text-brand-800 dark:text-brand-300 leading-relaxed text-[11px]">
              {data.replacementSkill}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
