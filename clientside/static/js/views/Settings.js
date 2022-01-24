import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Settings")
    }

    async getHtml() {
        return `
        <h1>Настройки</h1>
        <p> 
            Опции
        </p>
        `
    }
}