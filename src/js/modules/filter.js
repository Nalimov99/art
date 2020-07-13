const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.getElementsByTagName('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        elemContent = wrapper.getElementsByTagName('div'),
        no = document.querySelector('.portfolio-no'),
        noSelectors = ["grandmother", "granddad"];
    
    const filter = (mark) => {
        const content = wrapper.querySelectorAll(`.${mark}`);
        no.style.display = "none";

        elemContent.forEach(elem => {
            elem.style.display = "none";
            if(elem.classList.contains(mark)) {
                elem.classList.add('animated', 'fadeIn');
                elem.style.display = 'block';
            } 
        });

        noSelectors.forEach(item => {
            if(item == mark) {
                no.classList.add('animated', 'fadeIn');
                no.style.display = "block";
            }
        });

    };
    menu.addEventListener('click', (e) => {
        const target = e.target;
        if(target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
            filter(target.classList[0]);
        }
    });


};
export default filter;