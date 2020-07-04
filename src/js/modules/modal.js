import calcScrollWidth from './calcScrollWidth';

const modal = function () {
    let btnPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector, remove = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            modals = document.querySelectorAll('[data-modal]'),
            scrollWith = calcScrollWidth();

        trigger.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                btnPressed = true;
                modal.classList.remove('fadeOut');
                modal.classList.add('fadeIn');
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scrollWith}px`;

                if(remove) {
                    item.remove();
                }
            });
        });

        function closeModal(target) {
            target.addEventListener('click', e => {
                
                const trg = e.target;
                if(trg == modal || trg == close) {
                    modals.forEach(item => {
                        item.style.display = "none";
                        document.body.style.overflow = "";
                        document.body.style.marginRight = "0";
                    });
                }
            });
        }

        closeModal(close);
        closeModal(modal);
        
    }

    function showModalByTime(selector, time = 60000) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = "block";
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
                const scroll = calcScrollWidth();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function showModalByScroll(selector) {

        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if(!btnPressed && (document.documentElement.clientHeight + window.pageYOffset >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    showModalByTime('.popup-consultation');
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showModalByScroll('.fixed-gift');
};

export default modal;