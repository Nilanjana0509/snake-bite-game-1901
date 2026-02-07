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
    metaData: {},
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

export function getSpecificData(key, subkey = "") {
  const state = readState();
  if (!state || !state.hasOwnProperty(key)) return null;

  // if subkey is provided, return nested value
  if (subkey) {
    return state[key]?.hasOwnProperty(subkey) ? state[key][subkey] : null;
  }

  // otherwise return the full object
  return state[key];
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

export function getResult7Data() {
  const state = readState();
  if (!state || !state.levelResults) return null;

  return {
    level1Result: state.levelResults[1] || [],
    level2Result: state.levelResults[2] || [],
    level3Result: state.levelResults[3] || [],
    level4Result: state.levelResults[4] || [],
    level6Result: state.levelResults[6] || [],
    level7Result: state.levelResults[7] || [],
    level10Result: state.levelResults[10] || [],
    level14Result: state.levelResults[14] || [],
  };
}

export function getResult6Data() {
  const state = readState();
  if (!state || !state.levelResults) return null;
  return {
    level1Result: state.levelResults[1] || [],
    level2Result: state.levelResults[2] || [],
    level3Result: state.levelResults[3] || [],
    level4Result: state.levelResults[4] || [],
    level6Result: state.levelResults[6] || [],
    level7Result: state.levelResults[7] || [],
    level10Result: state.levelResults[10] || [],
    level18Result: state.levelResults[18] || [],
    level13Result: state.levelResults[13] || [],
  };
}

export function getResult5Data() {
  const state = readState();
  if (!state || !state.levelResults) return null;
  return {
    level1Result: state.levelResults[1] || [],
    level2Result: state.levelResults[2] || [],
    level3Result: state.levelResults[3] || [],
    level4Result: state.levelResults[4] || [],
    level6Result: state.levelResults[6] || [],
    level7Result: state.levelResults[7] || [],
    level9Result: state.levelResults[9] || [],
    level13Result: state.levelResults[13] || [],
  };
}

export function getResult4Data() {
  const state = readState();
  if (!state || !state.levelResults) return null;
  return {
    level1Result: state.levelResults[1] || [],
    level2Result: state.levelResults[2] || [],
    level3Result: state.levelResults[3] || [],
    level4Result: state.levelResults[4] || [],
    level6Result: state.levelResults[6] || [],
    level12Result: state.levelResults[12] || [],
  };
}

export function getResult3Data() {
  const state = readState();
  if (!state || !state.levelResults) return null;
  return {
    level1Result: state.levelResults[1] || [],
    level2Result: state.levelResults[2] || [],
    level3Result: state.levelResults[3] || [],
    level4Result: state.levelResults[4] || [],
    level6Result: state.levelResults[6] || [],
    level11Result: state.levelResults[11] || [],
    level12Result: state.levelResults[12] || [],
  };
}

export function getResult2Data() {
  const state = readState();
  if (!state || !state.levelResults) return null;
  return {
    level1Result: state.levelResults[1] || [],
    level2Result: state.levelResults[2] || [],
    level3Result: state.levelResults[3] || [],
    level4Result: state.levelResults[4] || [],
    level6Result: state.levelResults[6] || [],
    level11Result: state.levelResults[11] || [],
    level12Result: state.levelResults[15] || [],
  };
}

export function setMetaData(level, metaData) {
  const state = readState();
  if (!state) return null;
  state.metaData[level] = metaData;
  writeState(state);
}
export function isPathCompleted(path) {
  const state = readState();
  if (!state || !Array.isArray(state.completedPaths)) return false;

  return state.completedPaths.includes(path);
}
