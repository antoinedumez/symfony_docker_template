import { Controller } from '@hotwired/stimulus';
export default class extends Controller {
    static targets = ['hovered'];
    handleMouseEnter() {
        console.log('Hovered sur : ', this.hoveredTarget);    }

    handleMouseLeave() {
        console.log('Unhovered');
    }
}
