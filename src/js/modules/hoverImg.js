const hoverImg = (selector) => {
    const path = "assets/img/",
        img = document.querySelector(selector),
        parent = img.parentNode,
        children = parent.children,
        imgSrc = img.getAttribute('src'),
        fileName = imgSrc.split(path)[1].split('.')[0],
        fileExtension = imgSrc.split(path)[1].split('.')[1];
    const hoverFile = `${path}${fileName}-1.${fileExtension}`;

    parent.addEventListener('mouseenter', () => {
        img.src = hoverFile;
        children.forEach((element, index) => {
            if(index > 0 && index < 4) {
                element.style.display = "none";
            }
        });

    });

    parent.addEventListener('mouseleave', () => {
        img.src = imgSrc;
        children.forEach((element, index) => {
            if(index > 0 && index < 4) {
                element.style.display = "block";
            }
        });
    });
};

export default hoverImg;