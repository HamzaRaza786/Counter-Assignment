import { createContext, useContext } from "react";

interface CounterContextType {
  currentCount: number;
  updateCount: (count: number) => void;
}
export const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounterContext must be used within a CounterProvider');
  }
  return context;
}
