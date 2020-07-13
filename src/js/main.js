import slider from "./modules/slider";
import modal from './modules/modal';
import forms from './modules/forms';
import mask from "./modules/mask";
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import hoverImg from './modules/hoverImg';
import accordion from './modules/accordion';
import burger from "./modules/burger";
import smoothScroll from "./modules/smoothScroll";
import dragDrop from "./modules/dragDrop";

document.addEventListener('DOMContentLoaded', () => {
    'uses strict';

    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');

    forms();

    modal();

    mask("[name=phone]");

    checkTextInputs('[name="name"]');

    checkTextInputs('[name="message"]');

    showMoreStyles('.button-styles', '#styles .row');

    calc('#size', '#material', '#options', '.promocode', '.calc-price');

    filter();

    hoverImg('.size-1');
    hoverImg('.size-2');
    hoverImg('.size-3');
    hoverImg('.size-4');

    accordion();

    burger('.burger', '.burger-menu');

    smoothScroll('.pageup');

    dragDrop();
});