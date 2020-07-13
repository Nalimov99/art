const burger = (burgerSelector, menuSelector) => {
    const burger = document.querySelector(burgerSelector),
        menu = document.querySelector(menuSelector);

    burger.addEventListener('click', () => {
        if(menu.style.display == "none" && window.screen.availWidth < 992) {
            menu.classList.add('animated', 'bounceIn');
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }   
    });

    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992) {
            menu.style.display = "none";
        }
    });
};

export default burger;