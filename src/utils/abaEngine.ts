export type BehaviorFunction = 'Escape / Avoidance' | 'Access to Tangibles' | 'Attention' | 'Sensory / Automatic';

export interface ABCEvent {
  id: string;
  time: string;
  day: string;
  antecedent: string;
  behavior: string;
  consequence: string;
  functionType: BehaviorFunction;
  durationSec: number;
  intensity: 'Low' | 'Moderate' | 'High';
  safeOutcome: boolean;
}

export interface DailyMetric {
  day: string;
  safeTransitionsPct: number;
  baselinePct: number;
  episodeCount: number;
  avgDurationMin: number;
  tokensEarned: number;
}

export interface FunctionSummary {
  id: 'all' | 'escape' | 'tangible' | 'sensory' | 'attention';
  label: string;
  shortLabel: string;
  sharePct: number;
  weeklyReductionPct: number;
  avgDurationSec: number;
  peakWindow: string;
  primaryTrigger: string;
  replacementSkill: string;
  dailySeries: number[]; // Mon-Sun episode frequency
  hourlyHeat: { slot: string; level: number }[];
}

export interface SafetyChecklistItem {
  id: string;
  room: 'Living Room' | 'Kitchen & Dining' | 'Bedroom & Bath';
  task: string;
  abaRationale: string;
  priority: 'Critical' | 'High' | 'Standard';
  completed: boolean;
}

export interface FBAResult {
  hypothesizedFunction: BehaviorFunction;
  confidenceScore: number;
  explanation: string;
  replacementPhrase: string;
  proactiveStrategies: string[];
  reactiveStrategy: string;
  environmentalModifications: string[];
}

export const HERO_SCENARIOS = [
  {
    id: 'evening',
    title: 'Evening Routine',
    childTag: 'Leo, Age 5 · Transition Plan',
    safeRate: 94,
    deltaLabel: '+32% vs baseline',
    streakDays: 12,
    activePrompt: 'First put toys in bin, Then warm bath with fleet boats',
    abcSnippet: {
      antecedent: '5-minute visual timer chimed before bath transition',
      behavior: 'Requested "2 more minutes" using PECS card calmly',
      consequence: 'Honored 2-min extension + awarded 2 star tokens',
      functionTag: 'Escape / Avoidance' as BehaviorFunction,
    },
    weeklyData: [
      { day: 'Mon', safeTransitionsPct: 78, baselinePct: 52, episodeCount: 3, avgDurationMin: 4.5, tokensEarned: 8 },
      { day: 'Tue', safeTransitionsPct: 82, baselinePct: 55, episodeCount: 2, avgDurationMin: 3.8, tokensEarned: 10 },
      { day: 'Wed', safeTransitionsPct: 86, baselinePct: 50, episodeCount: 2, avgDurationMin: 3.1, tokensEarned: 11 },
      { day: 'Thu', safeTransitionsPct: 85, baselinePct: 54, episodeCount: 2, avgDurationMin: 2.9, tokensEarned: 12 },
      { day: 'Fri', safeTransitionsPct: 91, baselinePct: 58, episodeCount: 1, avgDurationMin: 1.8, tokensEarned: 14 },
      { day: 'Sat', safeTransitionsPct: 93, baselinePct: 60, episodeCount: 1, avgDurationMin: 1.4, tokensEarned: 15 },
      { day: 'Sun', safeTransitionsPct: 96, baselinePct: 56, episodeCount: 0, avgDurationMin: 0.5, tokensEarned: 18 },
    ],
  },
  {
    id: 'screen',
    title: 'Screen-Off Handoff',
    childTag: 'Maya, Age 7 · Tangible Plan',
    safeRate: 89,
    deltaLabel: '+41% vs baseline',
    streakDays: 9,
    activePrompt: 'Visual countdown + Dock station choice before dinner',
    abcSnippet: {
      antecedent: 'iPad guided-access timer showed 2 minutes left',
      behavior: 'Placed iPad on charging dock & chose dinner seat',
      consequence: 'Immediate high-five + unlocked after-dinner story choice',
      functionTag: 'Access to Tangibles' as BehaviorFunction,
    },
    weeklyData: [
      { day: 'Mon', safeTransitionsPct: 68, baselinePct: 40, episodeCount: 4, avgDurationMin: 6.2, tokensEarned: 6 },
      { day: 'Tue', safeTransitionsPct: 74, baselinePct: 42, episodeCount: 3, avgDurationMin: 5.0, tokensEarned: 8 },
      { day: 'Wed', safeTransitionsPct: 80, baselinePct: 45, episodeCount: 2, avgDurationMin: 4.1, tokensEarned: 10 },
      { day: 'Thu', safeTransitionsPct: 83, baselinePct: 44, episodeCount: 2, avgDurationMin: 3.2, tokensEarned: 11 },
      { day: 'Fri', safeTransitionsPct: 87, baselinePct: 48, episodeCount: 1, avgDurationMin: 2.3, tokensEarned: 13 },
      { day: 'Sat', safeTransitionsPct: 88, baselinePct: 46, episodeCount: 1, avgDurationMin: 2.0, tokensEarned: 14 },
      { day: 'Sun', safeTransitionsPct: 92, baselinePct: 50, episodeCount: 1, avgDurationMin: 1.2, tokensEarned: 16 },
    ],
  },
  {
    id: 'sensory',
    title: 'Grocery & Community',
    childTag: 'Noah, Age 6 · Sensory Plan',
    safeRate: 91,
    deltaLabel: '+28% vs baseline',
    streakDays: 15,
    activePrompt: 'Noise-canceling headphones + Helper checklist role',
    abcSnippet: {
      antecedent: 'Entered bright supermarket aisle with intercom announcement',
      behavior: 'Pointed to sensory vest & held cart handle',
      consequence: 'Put on deep-pressure vest + praised calm walking',
      functionTag: 'Sensory / Automatic' as BehaviorFunction,
    },
    weeklyData: [
      { day: 'Mon', safeTransitionsPct: 75, baselinePct: 58, episodeCount: 2, avgDurationMin: 5.1, tokensEarned: 9 },
      { day: 'Tue', safeTransitionsPct: 81, baselinePct: 60, episodeCount: 2, avgDurationMin: 4.0, tokensEarned: 10 },
      { day: 'Wed', safeTransitionsPct: 84, baselinePct: 55, episodeCount: 1, avgDurationMin: 3.2, tokensEarned: 12 },
      { day: 'Thu', safeTransitionsPct: 88, baselinePct: 59, episodeCount: 1, avgDurationMin: 2.5, tokensEarned: 13 },
      { day: 'Fri', safeTransitionsPct: 89, baselinePct: 61, episodeCount: 1, avgDurationMin: 2.1, tokensEarned: 14 },
      { day: 'Sat', safeTransitionsPct: 92, baselinePct: 62, episodeCount: 0, avgDurationMin: 0.8, tokensEarned: 16 },
      { day: 'Sun', safeTransitionsPct: 94, baselinePct: 64, episodeCount: 0, avgDurationMin: 0.6, tokensEarned: 17 },
    ],
  },
];

export const BEHAVIOR_ANALYTICS_DATA: Record<string, FunctionSummary> = {
  all: {
    id: 'all',
    label: 'All Tracked Functions',
    shortLabel: 'All Patterns',
    sharePct: 100,
    weeklyReductionPct: 64,
    avgDurationSec: 95,
    peakWindow: '4:30 PM – 6:00 PM',
    primaryTrigger: 'Unannounced transitions between preferred and non-preferred tasks',
    replacementSkill: 'Visual First/Then board + 5-minute audible/visual countdown',
    dailySeries: [14, 12, 10, 9, 7, 6, 5],
    hourlyHeat: [
      { slot: '8 AM', level: 25 },
      { slot: '11 AM', level: 40 },
      { slot: '2 PM', level: 35 },
      { slot: '5 PM', level: 85 },
      { slot: '7 PM', level: 55 },
    ],
  },
  escape: {
    id: 'escape',
    label: 'Escape / Task Avoidance',
    shortLabel: 'Escape (42%)',
    sharePct: 42,
    weeklyReductionPct: 68,
    avgDurationSec: 110,
    peakWindow: '3:45 PM – 5:15 PM',
    primaryTrigger: 'Multi-step verbal demands during homework or cleanup',
    replacementSkill: 'Functional Communication: handing "Break Please" card',
    dailySeries: [7, 6, 5, 4, 3, 2, 2],
    hourlyHeat: [
      { slot: '8 AM', level: 30 },
      { slot: '11 AM', level: 50 },
      { slot: '2 PM', level: 45 },
      { slot: '5 PM', level: 90 },
      { slot: '7 PM', level: 40 },
    ],
  },
  tangible: {
    id: 'tangible',
    label: 'Access to Tangibles',
    shortLabel: 'Tangible (31%)',
    sharePct: 31,
    weeklyReductionPct: 61,
    avgDurationSec: 85,
    peakWindow: '5:30 PM – 6:45 PM',
    primaryTrigger: 'Ending tablet time or denied snack right before dinner',
    replacementSkill: '5-Star Token Board + "First Dinner, Then 10m Tablet"',
    dailySeries: [5, 4, 3, 3, 2, 2, 1],
    hourlyHeat: [
      { slot: '8 AM', level: 15 },
      { slot: '11 AM', level: 35 },
      { slot: '2 PM', level: 30 },
      { slot: '5 PM', level: 95 },
      { slot: '7 PM', level: 65 },
    ],
  },
  sensory: {
    id: 'sensory',
    label: 'Sensory / Automatic Regulation',
    shortLabel: 'Sensory (18%)',
    sharePct: 18,
    weeklyReductionPct: 58,
    avgDurationSec: 70,
    peakWindow: '11:30 AM – 1:30 PM',
    primaryTrigger: 'Crowded rooms, loud appliances, or long sedentary periods',
    replacementSkill: 'Sensory corner access + noise-reducing headphones',
    dailySeries: [3, 3, 2, 2, 1, 1, 1],
    hourlyHeat: [
      { slot: '8 AM', level: 20 },
      { slot: '11 AM', level: 75 },
      { slot: '2 PM', level: 60 },
      { slot: '5 PM', level: 45 },
      { slot: '7 PM', level: 30 },
    ],
  },
  attention: {
    id: 'attention',
    label: 'Social Attention',
    shortLabel: 'Attention (9%)',
    sharePct: 9,
    weeklyReductionPct: 72,
    avgDurationSec: 50,
    peakWindow: '6:00 PM – 7:30 PM',
    primaryTrigger: 'Parent on phone call or preparing dinner in kitchen',
    replacementSkill: '"Excuse me" shoulder tap + scheduled 10-min 1-on-1 play',
    dailySeries: [2, 2, 1, 1, 1, 1, 0],
    hourlyHeat: [
      { slot: '8 AM', level: 20 },
      { slot: '11 AM', level: 25 },
      { slot: '2 PM', level: 20 },
      { slot: '5 PM', level: 70 },
      { slot: '7 PM', level: 80 },
    ],
  },
};

export const INITIAL_SAFETY_ITEMS: SafetyChecklistItem[] = [
  {
    id: 'lr-1',
    room: 'Living Room',
    task: 'Anchor bookcases and TV consoles to wall studs',
    abaRationale: 'Eliminates climbing hazards during sensory-seeking or elopement episodes',
    priority: 'Critical',
    completed: true,
  },
  {
    id: 'lr-2',
    room: 'Living Room',
    task: 'Set up designated visual Calm-Down Zone with soft seating',
    abaRationale: 'Provides a predictable, low-stimulation replacement environment',
    priority: 'High',
    completed: true,
  },
  {
    id: 'lr-3',
    room: 'Living Room',
    task: 'Install tamper-resistant outlet covers & cord concealers',
    abaRationale: 'Prevents automatic sensory exploration of electrical cords',
    priority: 'Critical',
    completed: true,
  },
  {
    id: 'lr-4',
    room: 'Living Room',
    task: 'Place visual First/Then schedule board at child eye level',
    abaRationale: 'Reduces transition anxiety and escape-maintained behaviors',
    priority: 'Standard',
    completed: false,
  },
  {
    id: 'kd-1',
    room: 'Kitchen & Dining',
    task: 'Install magnetic locks on lower cabinets and knife drawers',
    abaRationale: 'Antecedent barrier preventing unsafe access during tangible-seeking',
    priority: 'Critical',
    completed: true,
  },
  {
    id: 'kd-2',
    room: 'Kitchen & Dining',
    task: 'Create accessible "Approved Snack Bin" with picture labels',
    abaRationale: 'Promotes independent functional communication and safe choice-making',
    priority: 'High',
    completed: true,
  },
  {
    id: 'kd-3',
    room: 'Kitchen & Dining',
    task: 'Fit stove knob covers and rear-burner safety guards',
    abaRationale: 'Critical burn prevention during dinner preparation windows',
    priority: 'Critical',
    completed: false,
  },
  {
    id: 'bb-1',
    room: 'Bedroom & Bath',
    task: 'Set water heater thermostat to max 120°F (48°C) with anti-scald valve',
    abaRationale: 'Protects children who seek warm water sensory input independently',
    priority: 'Critical',
    completed: true,
  },
  {
    id: 'bb-2',
    room: 'Bedroom & Bath',
    task: 'Install upper-door chime or slide latch on exterior/balcony doors',
    abaRationale: 'Immediate caregiver alert for elopement / wandering safety',
    priority: 'Critical',
    completed: true,
  },
  {
    id: 'bb-3',
    room: 'Bedroom & Bath',
    task: 'Post laminated 4-step illustrated bath & bedtime routine strip',
    abaRationale: 'Supports independent step completion with token reinforcement',
    priority: 'Standard',
    completed: false,
  },
];

export const SAMPLE_ABC_PRESETS = [
  {
    id: 'ipad-transition',
    label: 'iPad Transition Meltdown',
    antecedent: 'I told my 6-year-old son that iPad time was over and it was time to sit at the table for dinner.',
    behavior: 'He screamed "No!", threw the iPad onto the couch, and dropped to the floor crying for 4 minutes.',
    consequence: 'I gave him 5 more minutes on the iPad so he would stop crying and come to the table peacefully.',
  },
  {
    id: 'homework-escape',
    label: 'Homework Refusal & Elopement',
    antecedent: 'I placed a 20-problem math worksheet on the desk and asked my daughter to start working.',
    behavior: 'She swept the paper off the desk, yelled "It is too hard!", and ran into her bedroom.',
    consequence: 'I put the worksheet away for the evening and let her play with her blocks instead.',
  },
  {
    id: 'grocery-sensory',
    label: 'Supermarket Sensory Overload',
    antecedent: 'We walked into a busy grocery store with bright fluorescent lights and loud checkout scanners.',
    behavior: 'My child covered both ears tightly, began humming loudly, and tried to pull me toward the exit door.',
    consequence: 'We immediately left the store and sat in the quiet car for 10 minutes until he regulated.',
  },
  {
    id: 'phone-attention',
    label: 'Interrupting Work Call',
    antecedent: 'I answered an important work phone call in the kitchen and looked away from my child.',
    behavior: 'She started banging a metal spoon loudly against the kitchen cabinet and yelling my name.',
    consequence: 'I paused my call, looked at her, and lectured her for 2 minutes about being quiet while I am on the phone.',
  },
];

export function calculateSafetyCompletion(items: SafetyChecklistItem[], room?: SafetyChecklistItem['room']): {
  completedCount: number;
  totalCount: number;
  percentage: number;
} {
  const filtered = room ? items.filter((item) => item.room === room) : items;
  if (filtered.length === 0) {
    return { completedCount: 0, totalCount: 0, percentage: 0 };
  }
  const completedCount = filtered.filter((item) => item.completed).length;
  const percentage = Math.round((completedCount / filtered.length) * 100);
  return {
    completedCount,
    totalCount: filtered.length,
    percentage,
  };
}

export function calculateEpisodeReduction(series: number[]): {
  firstDay: number;
  lastDay: number;
  reductionPct: number;
} {
  if (!series || series.length === 0) {
    return { firstDay: 0, lastDay: 0, reductionPct: 0 };
  }
  const firstDay = series[0];
  const lastDay = series[series.length - 1];
  if (firstDay <= 0) {
    return { firstDay, lastDay, reductionPct: 0 };
  }
  const reductionPct = Math.round(((firstDay - lastDay) / firstDay) * 100);
  return { firstDay, lastDay, reductionPct };
}

export function classifyABCBehavior(
  antecedent: string,
  behavior: string,
  consequence: string
): FBAResult {
  const combined = `${antecedent} ${behavior} ${consequence}`.toLowerCase();

  const sensoryKeywords = ['loud', 'noise', 'ears', 'bright', 'light', 'crowd', 'hum', 'rock', 'sensory', 'overwhelm', 'store', 'headphone', 'vest'];
  const tangibleKeywords = ['ipad', 'tablet', 'toy', 'snack', 'candy', 'cookie', 'game', 'phone', 'turn off', 'more minutes', 'gave him', 'gave her', 'screen'];
  const attentionKeywords = ['call', 'talking', 'looked at', 'lectured', 'ignored', 'watch me', 'mom', 'dad', 'sibling', 'attention', 'yelled at'];
  const escapeKeywords = ['worksheet', 'homework', 'clean up', 'bath', 'bedtime', 'brush', 'task', 'hard', 'ran away', 'put away', 'break', 'demand', 'chore'];

  const scoreKeywords = (words: string[]) =>
    words.reduce((acc, word) => (combined.includes(word) ? acc + 1 : acc), 0);

  const scores: { fn: BehaviorFunction; score: number }[] = [
    { fn: 'Access to Tangibles', score: scoreKeywords(tangibleKeywords) },
    { fn: 'Escape / Avoidance', score: scoreKeywords(escapeKeywords) },
    { fn: 'Sensory / Automatic', score: scoreKeywords(sensoryKeywords) },
    { fn: 'Attention', score: scoreKeywords(attentionKeywords) },
  ];

  scores.sort((a, b) => b.score - a.score);
  const top = scores[0].score > 0 ? scores[0].fn : 'Escape / Avoidance';

  if (top === 'Access to Tangibles') {
    return {
      hypothesizedFunction: 'Access to Tangibles',
      confidenceScore: 92,
      explanation:
        'The behavior occurs immediately following the removal or denial of a highly preferred item/activity, and the consequence inadvertently reinforced the episode by restoring or extending access.',
      replacementPhrase: '"Can I have 2 more minutes, please?" or trading a transition token.',
      proactiveStrategies: [
        'Use a visual countdown timer with warnings at 5 minutes, 2 minutes, and 1 minute before ending the activity.',
        'Use a "First / Then" visual board (e.g., "First place device in charging dock, Then choose dinner drink").',
        'Schedule transitions right before another enjoyable activity so the drop in reinforcement is less steep.',
      ],
      reactiveStrategy:
        'Maintain calm follow-through on the boundary without returning the item during escalation. Validate feelings briefly ("I know it is hard to stop playing") and redirect to the "First/Then" card.',
      environmentalModifications: [
        'Set up a dedicated family charging station out of reach during meal and sleep routines.',
        'Enable built-in Guided Access / Screen Time automatic shutoff timers so the device itself signals the end of the session.',
      ],
    };
  }

  if (top === 'Sensory / Automatic') {
    return {
      hypothesizedFunction: 'Sensory / Automatic',
      confidenceScore: 90,
      explanation:
        'The antecedent involves high environmental stimulation (auditory, visual, or tactile), and the behavior serves to immediately modulate or block overwhelming sensory input.',
      replacementPhrase: '"Too loud — headphones please" or pointing to a Break/Calm Zone card.',
      proactiveStrategies: [
        'Prepare a portable sensory kit (noise-reducing headphones, sunglasses, chewable or fidget tool) before entering high-stimulation settings.',
        'Preview the environment using a short social story and establish a clear "quiet signal" the child can use anytime.',
        'Schedule regular 5-minute sensory regulation breaks before signs of overload appear.',
      ],
      reactiveStrategy:
        'Immediately lower environmental demands and move to a quiet, dim, low-stimulation space. Avoid verbal questioning while the child is dysregulated; model slow deep breathing.',
      environmentalModifications: [
        'Create a dedicated home Sensory Calm Corner with soft lighting, weighted lap pad, and visual breathing pacer.',
        'Reduce competing background noise (TV + appliances) during high-focus family routines.',
      ],
    };
  }

  if (top === 'Attention') {
    return {
      hypothesizedFunction: 'Attention',
      confidenceScore: 89,
      explanation:
        'The behavior reliably occurs when caregiver attention is divided or diverted, and results in immediate social reaction (eye contact, verbal reprimand, or physical proximity).',
      replacementPhrase: 'Tapping caregiver shoulder gently or handing a "Play With Me" badge.',
      proactiveStrategies: [
        'Provide a 5-minute "connection fill-up" of undivided 1-on-1 attention immediately before starting a phone call or chore.',
        'Give the child an engaging independent activity reserved exclusively for times when you are busy.',
        'Catch the child playing safely every 3–4 minutes and deliver brief, specific verbal praise ("I love how quietly you are building!").',
      ],
      reactiveStrategy:
        'Ensure physical safety while minimizing eye contact and verbal lectures for the attention-seeking behavior. The moment the child pauses or uses an appropriate request, deliver warm, enthusiastic attention.',
      environmentalModifications: [
        'Keep a special "Busy Box" of high-interest puzzles and mess-free activities near the kitchen or workspace.',
        'Use a visual Green/Red light indicator showing when caregiver is available vs. on a brief call.',
      ],
    };
  }

  return {
    hypothesizedFunction: 'Escape / Avoidance',
    confidenceScore: 91,
    explanation:
      'The behavior is triggered by a task demand or routine transition and successfully delays, terminates, or avoids the non-preferred activity.',
    replacementPhrase: '"I need a 2-minute break" or "Help me with the first step, please."',
    proactiveStrategies: [
      'Use Behavioral Momentum: start with 2–3 quick, easy requests the child enjoys before introducing the challenging task.',
      'Chunk the task into smaller visible steps (e.g., 3 math problems at a time instead of 20) paired with a token board.',
      'Offer controlled choices within the demand ("Do you want to write with the blue marker or green pencil?").',
    ],
    reactiveStrategy:
      'Prompt the child to ask for a functional break or help BEFORE removing the task. Keep the demand neutral and brief, then return to a simplified version of the step once calm.',
    environmentalModifications: [
      'Remove distracting toys from the workspace and display a clear visual timer showing exact work duration.',
      'Place a physical "Break Card" right on the desk so requesting a pause is easier than eloping.',
    ],
  };
}
