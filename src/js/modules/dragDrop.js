const dragDrop = () => {
    const inputs = document.querySelectorAll('[name="upload"');
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
        inputs.forEach(input => {
            input.addEventListener(event, (e) => e.preventDefault);
        });
    });

    ['dragenter', 'dragover'].forEach(event => {
        inputs.forEach(input => {
            input.addEventListener(event, () => {
                input.parentNode.style.border = "1px dotted grey";
                input.parentNode.style.borderRadius = "5px";
            });
        });
    });

    ['dragleave', 'drop'].forEach(event => {
        inputs.forEach(input => {
            input.addEventListener(event, () => {
                input.parentNode.style.border = "";
            });
        });
    });

};

export default dragDrop;