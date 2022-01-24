import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
        <h1>Панель управления</h1>
        <p> 
            Добро пожаловать
        </p>
        <p> 
            <a href="/posts" data-link>Перейти к сообщениям</a>
        </p>
        `
    }
}