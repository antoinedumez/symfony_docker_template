import { Controller } from '@hotwired/stimulus';
export default class extends Controller {
    connect() {
        this.element.textContent = 'Connected to hello_controller.js! Edit me in assets/controllers/hello_controller.js';
    }
    disconnect() {
        this.element.textContent = 'Disconnected from hello_controller.js';

        console.log('oupsi')
    }
}
