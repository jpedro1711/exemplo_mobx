import { useContext, createContext } from 'react';
import { ScenarioStore } from './ScenarioStore';

const StoreContext = createContext(new ScenarioStore());

export const useStore = () => {
    return useContext(StoreContext);
};
