import { makeAutoObservable } from "mobx";
import axios from "axios";

export interface Scenario {
    caseLine: any,
    isValid: boolean,
    year: any
}

export class ScenarioStore {
    scenarios: Scenario[] | null = null;
    validScenario: Scenario | null = null;

    constructor() {
        makeAutoObservable(this);
        this.getScenarios();
    }

    getValidScenario = () => {
        return this.validScenario;
    }

    setValidScenario = (caseLine: any) => {
        const scenario = this.scenarios?.find(s => s.caseLine === caseLine);
        if (scenario) {
            if (this.validScenario) {
                this.validScenario.isValid = false;
            }
            scenario.isValid = true;
            this.validScenario = scenario;

            this.saveValidScenario(scenario).catch((error) => {
                // Revert the change if the API call fails
                scenario.isValid = false;
                if (this.validScenario === scenario) {
                    this.validScenario = null;
                }
                console.error("Failed to save the valid scenario: ", error);
            });
        }
    }

    saveValidScenario = async (scenario: Scenario) => {
        console.log('comecou requisicao');
        await axios.post('https://localhost:7206/Scenario/', scenario);
        await this.getScenarios();
        console.log('acabou requisicao');
    }

    async getScenarios() {
        const result = await axios.get('https://localhost:7206/Scenario?year=2024');
        this.scenarios = result.data;
        return this.scenarios;
    }
}
