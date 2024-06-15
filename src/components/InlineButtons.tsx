import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ScenarioStore } from '../stores/ScenarioStore';
import ValidScenarioButton from './ValidScenarioButton';

const scenario_store = new ScenarioStore();

const InlineButtons = observer(() => {

    useEffect(() => {
        scenario_store.getScenarios();
    }, []);

    return (
        <div>
            {scenario_store.scenarios && scenario_store.scenarios.map((c) => (
                <div key={c.caseLine} style={{ border: '1px solid red', margin: '10px' }}>
                    <ValidScenarioButton 
                        scenario={c}
                        scenarioStore={scenario_store}
                    />
                    <p>{'válido: '}{c.isValid.toString()}</p>
                </div>
            ))}
        </div>
    );
});

export default InlineButtons;
