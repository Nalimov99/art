const slider = function(slides, dir, prev = false, next = false, autoAnimation = true ) {
    const items = document.querySelectorAll(slides);
    let slideIndex = 0;

    //main dir className should be on 0 index
    let dirClassName = [];
    

    switch(dir) {
        case 'horizontal':
            dirClassName.push('fadeInRight');
            dirClassName.push('fadeInLeft');
            break;
        case 'vertical': 
            dirClassName.push('slideInDown');
            dirClassName.push('slideInUp');
    }

    function showSlide(n) {
        if(n < 0) {
            n = items.length - 1;
            slideIndex = items.length - 1;
        } else if(n >= items.length) {
            n = 0;
            slideIndex = 0;
        }

        items.forEach((value) => {
            value.style.display = "none";
        });

        items[n].style.display = "block";
    }

    showSlide(slideIndex);

    if(autoAnimation) {
        let pause;
        let activateAnimation = function()  {
            pause = setInterval(() => {
                showSlide(++slideIndex);
                items.forEach((value) => {
                    value.classList.remove(dirClassName[1]);
                    value.classList.add(dirClassName[0]);
                });
            }, 5000);
        };
        activateAnimation();

        items[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(pause);
        });
        items[0].parentNode.addEventListener('mouseleave', () => {
            activateAnimation();
        });
    }

    try {
        const nxtBtn = document.querySelector(next),
            prevBtn = document.querySelector(prev);

        nxtBtn.addEventListener('click', () => {
            slideIndex += 1;
            showSlide(slideIndex);
            items[slideIndex].classList.remove(dirClassName[0]);
            items[slideIndex].classList.add(dirClassName[1]);
            
        });
        prevBtn.addEventListener('click', () => {
            slideIndex -= 1;
            showSlide(slideIndex);
            items[slideIndex].classList.remove(dirClassName[1]);
            items[slideIndex].classList.add(dirClassName[0]);
        });

    } catch(e){}

    
};

export default slider;