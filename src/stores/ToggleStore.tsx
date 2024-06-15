import { makeAutoObservable } from "mobx"
import axios from "axios";

export class ToggleStore {
    checked: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    setValue(value: boolean) {
        this.checked = value;
    }

    getValue() {
        return this.checked;
    }
}