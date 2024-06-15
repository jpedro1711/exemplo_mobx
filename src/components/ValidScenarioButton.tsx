import React from 'react';
import { Switch } from '@mui/material';
import { Scenario, ScenarioStore } from '../stores/ScenarioStore';

interface ValidScenarioButtonProps {
    scenario: Scenario;
    scenarioStore: ScenarioStore;
}

const ValidScenarioButton: React.FC<ValidScenarioButtonProps> = ({ scenario, scenarioStore }) => {
    const handleChange = () => {
        scenarioStore.setValidScenario(scenario.caseLine);
    };

    return (
        <Switch 
            onChange={handleChange} 
            checked={scenario.isValid}
        />
    );
};

export default ValidScenarioButton;
