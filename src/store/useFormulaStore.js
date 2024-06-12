import { create } from 'zustand';

const useFormulaStore = create((set) => ({
  formula: [],
  addToFormula: (item) => {
    set((state) => ({ formula: [...state.formula, item] }));
  },
  removeFromFormula: (index) => {
    set((state) => ({
      formula: state.formula.filter((_, i) => i !== index),
    }));
  },
}));

export default useFormulaStore;
