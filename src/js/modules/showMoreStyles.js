import {getRequest} from "./services/request";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger),
        wrp = document.querySelector(wrapper);


    function createCard(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
            <div class="styles-block animated fadeInUp">
                <img src=${src} alt=${src}>
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>`;
            
            wrp.appendChild(card);
        });

    }
    
    btn.addEventListener('click', function() {
        getRequest('assets/db.json')
        .then(res => {
            createCard(res.styles); 
            this.remove();
        })
        .catch(e => {
            const er = document.querySelector('.popup-error');
            er.classList.add('animated', 'fadeIn');
            er.style.display = "block";
            setTimeout(() => {
                er.classList.remove('animated', 'fadeIn');
                er.style.display = "none";
            }, 3500);
        });
        
    });

};

export default showMoreStyles;