const STORAGE_KEY = "GAME_STATE";

function readState() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

function writeState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function clearGameStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

export function initGameStorage(tc = 0, cl = 1, cp = "1", comp = [], lr = {}) {
  const initialState = {
    totalCompleted: 0,
    currentLevel: 1,
    currentPath: "",
    completedPaths: [],
    completedLevels: {},
    levelResults: {},
  };

  writeState(initialState);
}

export function storeLevelResult(level, resultArray) {
  const state = readState();
  if (!state) return;

  state.levelResults[level] = resultArray;
  state.completedLevels[level] = true;

  if (!state.currentPath) {
    state.currentPath = String(level);
  } else {
    state.currentPath = `${state.currentPath}-${level}`;
  }

  writeState(state);
}

export function storeCurrentLevel(level) {
  const state = readState();
  if (!state) return;
  state.currentLevel = level;
  writeState(state);
}

// export function increaseStar() {
//   const state = readState();
//   if (!state) return;
//   state.totalCompleted += 1;
//   writeState(state);
// }

export function getSpecificData(key) {
  const state = readState();
  if (!state) return null;

  return state.hasOwnProperty(key) ? state[key] : null;
}

export function completePath() {
  const state = readState();
  if (!state || !state.currentPath) return;

  // ensure completedPaths exists
  if (!Array.isArray(state.completedPaths)) {
    state.completedPaths = [];
  }

  // prevent duplicates
  if (!state.completedPaths.includes(state.currentPath)) {
    state.completedPaths.push(state.currentPath);
    state.totalCompleted += 1;
  }
  writeState(state);
}

export function getResult1Data() {
  const state = readState();
  if (!state || !state.levelResults) return null;

  return {
    level1Result: state.levelResults[1] || [],
    level2Result: state.levelResults[2] || [],
    level5Result: state.levelResults[5] || [],
  };
}
