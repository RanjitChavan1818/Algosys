const STORAGE_KEY = "dsa_theory_data_v1";

export const loadTheoryData = (defaultData) => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultData;
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return defaultData;
    return parsed;
  } catch (error) {
    return defaultData;
  }
};

export const saveTheoryData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    // Ignore storage errors
  }
};
