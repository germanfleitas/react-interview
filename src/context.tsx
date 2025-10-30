import { createContext } from 'react';

export const GeneralContext = createContext<GeneralContextType>({
  isLoading: false,
  setIsLoading: () => {}
});

type GeneralContextType = {
  isLoading: boolean;
  setIsLoading: (newValue: boolean) => void;
}