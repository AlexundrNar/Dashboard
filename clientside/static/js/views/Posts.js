import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Posts")
    }

    async getHtml() {
        return `
        <h1>Сообщения</h1>
        <p> 
            Просмотр сообщений
        </p>
        `
    }
}