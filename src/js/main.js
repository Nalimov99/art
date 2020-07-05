import slider from "./modules/slider";
import modal from './modules/modal';
import forms from './modules/forms';
import mask from "./modules/mask";
import checkTextInputs from './modules/checkTextInputs';

document.addEventListener('DOMContentLoaded', () => {
    'uses strict';

    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms();
    modal();
    mask("[name=phone]");
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');

    
});