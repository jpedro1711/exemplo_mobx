import { makeAutoObservable } from "mobx"
import axios from "axios";

export class InputStore {
    inputValue: string = "valor inicial";

    constructor() {
        makeAutoObservable(this)
    }

    setValue(value: string) {
        this.inputValue = value;
    }

    getValue() {
        return this.inputValue;
    }
}