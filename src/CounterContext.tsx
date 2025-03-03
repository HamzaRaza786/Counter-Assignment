import { createContext, ReactNode, useContext, useState } from "react";

interface CounterContextType {
  currentCount: number;
  increment: () => void;
}
export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const value = {
    currentCount: count,
    increment,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};
