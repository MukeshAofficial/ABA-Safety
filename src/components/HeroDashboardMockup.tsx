import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  TrendingUp,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';
import { HERO_SCENARIOS } from '../utils/abaEngine';

export const HeroDashboardMockup: React.FC = () => {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selectedDayIdx, setSelectedDayIdx] = useState(6); // Default to Sunday (latest)
  const [showBaseline, setShowBaseline] = useState(true);
  const [bonusTokens, setBonusTokens] = useState(0);
  const [justAwarded, setJustAwarded] = useState(false);

  const currentScenario = HERO_SCENARIOS[scenarioIdx];
  const selectedDay = currentScenario.weeklyData[selectedDayIdx] || currentScenario.weeklyData[6];

  const handleAwardToken = () => {
    setBonusTokens((prev) => prev + 1);
    setJustAwarded(true);
    setTimeout(() => setJustAwarded(false), 900);
  };

  return (
    <div
      data-testid="hero-dashboard-mockup"
      className="w-full max-w-xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.12)] dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.55)] overflow-hidden transition-colors duration-300"
    >
      {/* Top Window Header Bar */}
      <div className="px-4 sm:px-6 py-3.5 bg-slate-50/90 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-tight">
              ABA Home Safety & Transition Monitor
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              {currentScenario.childTag}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowBaseline((b) => !b)}
          aria-pressed={showBaseline}
          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
            showBaseline
              ? 'bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border-brand-200 dark:border-brand-800'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
          }`}
        >
          <SlidersHorizontal className="w-3 h-3" />
          <span>{showBaseline ? 'Comparing Baseline' : 'Show Baseline'}</span>
        </button>
      </div>

      {/* Interactive Scenario Selector Tabs */}
      <div className="px-4 sm:px-6 pt-4">
        <div
          role="tablist"
          aria-label="Behavior intervention scenarios"
          className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60"
        >
          {HERO_SCENARIOS.map((scen, idx) => {
            const active = idx === scenarioIdx;
            return (
              <button
                key={scen.id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => {
                  setScenarioIdx(idx);
                  setSelectedDayIdx(6);
                }}
                className={`relative py-2 px-2 rounded-lg text-xs font-semibold transition-colors truncate cursor-pointer ${
                  active
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="heroScenarioTab"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-lg shadow-xs border border-slate-200/70 dark:border-slate-700"
                  />
                )}
                <span className="relative z-10">{scen.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Top KPI Summary Row */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1 truncate">
              Safe Transitions
            </div>
            <div className="flex items-baseline justify-between gap-1">
              <span className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white tabular-nums">
                {currentScenario.safeRate}%
              </span>
              <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums whitespace-nowrap shrink-0">
                {currentScenario.deltaLabel.replace(' vs baseline', '')}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
              Selected ({selectedDay.day})
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-display font-bold text-brand-600 dark:text-brand-400 tabular-nums">
                {selectedDay.safeTransitionsPct}%
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
                {selectedDay.avgDurationMin}m
              </span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800">
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1">
              Tokens Earned
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-display font-bold text-amber-600 dark:text-amber-400 tabular-nums">
                {selectedDay.tokensEarned + bonusTokens}
              </span>
              <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
            </div>
          </div>
        </div>

        {/* Interactive 7-Day Chart */}
        <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/90">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                7-Day Safe Transition Rate (Tap day to inspect)
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-brand-600 dark:bg-brand-500 inline-block" />
                Active Plan
              </span>
              {showBaseline && (
                <span className="inline-flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-300 dark:bg-slate-700 inline-block" />
                  Baseline
                </span>
              )}
            </div>
          </div>

          {/* Bars Grid */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3 items-end h-36 pt-4 pb-1 px-1">
            {currentScenario.weeklyData.map((d, idx) => {
              const isSelected = idx === selectedDayIdx;
              return (
                <button
                  key={d.day}
                  type="button"
                  onClick={() => setSelectedDayIdx(idx)}
                  aria-label={`Inspect ${d.day}: ${d.safeTransitionsPct}% safe transitions`}
                  className="group flex flex-col items-center h-full justify-end focus:outline-none cursor-pointer"
                >
                  <div className="text-[10px] font-mono tabular-nums mb-1 font-semibold text-slate-600 dark:text-slate-300 opacity-85 group-hover:opacity-100">
                    {d.safeTransitionsPct}%
                  </div>
                  <div className="w-full h-24 bg-slate-200/60 dark:bg-slate-800/70 rounded-t-lg relative flex items-end justify-center gap-0.5 p-0.5 overflow-hidden">
                    {showBaseline && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${d.baselinePct}%` }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="w-1/3 bg-slate-300 dark:bg-slate-600 rounded-t-sm"
                        title={`Baseline: ${d.baselinePct}%`}
                      />
                    )}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${d.safeTransitionsPct}%` }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className={`flex-1 rounded-t-md transition-colors ${
                        isSelected
                          ? 'bg-brand-600 dark:bg-brand-500'
                          : 'bg-brand-400/80 dark:bg-brand-500/50 group-hover:bg-brand-500'
                      }`}
                    />
                  </div>
                  <span
                    className={`mt-1.5 text-[11px] font-medium tabular-nums ${
                      isSelected
                        ? 'text-brand-600 dark:text-brand-400 font-bold'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {d.day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live ABC Context & Reinforcement Action */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 p-3.5 sm:p-4 space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                <span>Latest Logged ABC Chain</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Function: {currentScenario.abcSnippet.functionTag}
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 mb-0.5">
                  A · ANTECEDENT
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">
                  {currentScenario.abcSnippet.antecedent}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div className="text-[10px] font-bold text-brand-600 dark:text-brand-400 mb-0.5">
                  B · REPLACEMENT BEHAVIOR
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">
                  {currentScenario.abcSnippet.behavior}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">
                  C · CONSEQUENCE
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-snug">
                  {currentScenario.abcSnippet.consequence}
                </p>
              </div>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 min-w-0 flex-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="truncate">
                  {currentScenario.activePrompt}
                </span>
              </div>

              <button
                type="button"
                onClick={handleAwardToken}
                className="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-95 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{justAwarded ? 'Star Awarded!' : '+1 Reinforce Safe Step'}</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
