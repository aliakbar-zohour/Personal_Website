"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type IntroContextValue = {
  ready: boolean;
  showIntro: boolean;
  completeIntro: () => void;
};

const IntroContext = createContext<IntroContextValue>({
  ready: false,
  showIntro: false,
  completeIntro: () => undefined,
});

export function useIntro() {
  return useContext(IntroContext);
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const seen = window.localStorage.getItem("az-intro-seen") === "1";
    if (seen) {
      setReady(true);
      setShowIntro(false);
    } else {
      setShowIntro(true);
    }
  }, []);

  const completeIntro = useCallback(() => {
    window.localStorage.setItem("az-intro-seen", "1");
    setShowIntro(false);
    setReady(true);
    window.dispatchEvent(new CustomEvent("az-intro-complete"));
  }, []);

  const value = useMemo(
    () => ({ ready, showIntro, completeIntro }),
    [ready, showIntro, completeIntro],
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}
