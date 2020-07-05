const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
                input.reportValidity();
                input.setCustomValidity('Допускается ввод только русских символов');
            } else {
                input.setCustomValidity('');
            }
        });
    });
};

export default checkTextInputs;