import { Controller } from '@hotwired/stimulus';
export default class extends Controller {
    handleClick() {
        const changeMe = document.querySelector('#changeMe');
        if (changeMe) {
            const dataControllerAttributeValues = changeMe.getAttribute('data-controller');
            const dataActionAttributeValues = changeMe.getAttribute('data-action');
            if (dataControllerAttributeValues && dataControllerAttributeValues.includes('hello')) {
                changeMe.setAttribute('data-controller', dataControllerAttributeValues.replace('hello', '').trim());
            } else if (!dataControllerAttributeValues || !dataControllerAttributeValues.includes('hello')) {
                changeMe.setAttribute('data-controller', dataControllerAttributeValues ? dataControllerAttributeValues.concat(' hello') : 'hello');
                if (!dataActionAttributeValues || !dataActionAttributeValues.includes('click->onClick#handleClick')) {
                    console.log('this log will be displayed only once, first time you click on the button');
                    changeMe.setAttribute('data-action', 'click->onClick#handleClick');
                }
            }
        }
    }
}
