const accordion = () => {
    function bindAccordion(targetSelectors, contentSelectors) {
        const targets = document.querySelectorAll(targetSelectors),
            content = document.querySelectorAll(contentSelectors);

        content.forEach(item => item.style.display = "none");
           
            
        function showContent(i) {
            content.forEach(item => item.style.display = "none");
            content[i].style.display = "block";
            content[i].classList.add('animated', 'zoomIn');
        }
        
        targets.forEach((item, index) => {
            item.addEventListener('click', () => {
                targets.forEach(item => item.children[0].classList.remove('active'));
                showContent(index);
                item.children[0].classList.add('active');
            });
        });
    }

    bindAccordion('.accordion-heading', '.accordion-block');
};

export default accordion;