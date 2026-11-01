import test from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_SAFETY_ITEMS,
  BEHAVIOR_ANALYTICS_DATA,
  calculateSafetyCompletion,
  calculateEpisodeReduction,
  classifyABCBehavior,
} from './abaEngine';

test('calculateSafetyCompletion computes accurate totals and room-filtered percentages', () => {
  const overall = calculateSafetyCompletion(INITIAL_SAFETY_ITEMS);
  assert.equal(overall.totalCount, 10);
  assert.equal(overall.completedCount, 7);
  assert.equal(overall.percentage, 70);

  const livingRoom = calculateSafetyCompletion(INITIAL_SAFETY_ITEMS, 'Living Room');
  assert.equal(livingRoom.totalCount, 4);
  assert.equal(livingRoom.completedCount, 3);
  assert.equal(livingRoom.percentage, 75);
});

test('calculateEpisodeReduction accurately measures Mon-to-Sun behavior reduction percentage', () => {
  const allSeries = BEHAVIOR_ANALYTICS_DATA.all.dailySeries;
  const result = calculateEpisodeReduction(allSeries);
  assert.equal(result.firstDay, 14);
  assert.equal(result.lastDay, 5);
  assert.equal(result.reductionPct, 64);
});

test('classifyABCBehavior identifies Tangible, Escape, Sensory, and Attention functions accurately', () => {
  const tangibleRes = classifyABCBehavior(
    'Told him iPad time was over',
    'Threw tablet and screamed',
    'Gave him 5 more minutes on the iPad'
  );
  assert.equal(tangibleRes.hypothesizedFunction, 'Access to Tangibles');
  assert.ok(tangibleRes.proactiveStrategies.length >= 3);

  const sensoryRes = classifyABCBehavior(
    'Entered loud crowded grocery store with bright lights',
    'Covered ears and hummed loudly',
    'Put on headphones and went to quiet car'
  );
  assert.equal(sensoryRes.hypothesizedFunction, 'Sensory / Automatic');

  const escapeRes = classifyABCBehavior(
    'Handed math homework worksheet',
    'Ran away and said it is too hard',
    'Put worksheet away'
  );
  assert.equal(escapeRes.hypothesizedFunction, 'Escape / Avoidance');

  const attentionRes = classifyABCBehavior(
    'Mom answered a work phone call',
    'Yelled mom and banged cabinet',
    'Mom looked at her and lectured her'
  );
  assert.equal(attentionRes.hypothesizedFunction, 'Attention');
});
