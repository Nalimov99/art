import {postData} from "./services/request";

const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textArea = document.querySelectorAll('textarea');
        

    let messageDiv = document.createElement('div'),
        messageImg = document.createElement('img');

    const upload = document.querySelectorAll('[name=upload]'),
    chooseFile = document.querySelectorAll('[name=choose_file]');


    const statusText = {
        load: "Загрузка...",
        ok: "Спасибо! Скоро с вами свяжемся!",
        fail: "Произошла ошибка"
    };
    const statusImg = {
        load: "assets/img/spinner.gif",
        ok: "assets/img/ok.png",
        fail: "assets/img/fail.png"
    };

    messageDiv.classList.add('status');
    messageDiv.textContent = statusText.load;
    messageImg.src = statusImg.load;
    messageDiv.appendChild(messageImg);
    



    function clearInputs() {
        inputs.forEach(item => {
            item.value = "";
        });
        textArea.forEach(item => {
            item.value = "";
        });
    }

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(item);
            if(item.hasAttribute('data-calc')) {
                formData.append('price', document.querySelector('.calc-price').textContent);
            }
            
            let itemHeight = getComputedStyle(item, null).height;
            messageDiv.style.minHeight = itemHeight;
            item.parentNode.style.height = getComputedStyle(item).height;
            item.style.display = "none";
            messageDiv.style.display = "flex";
            messageDiv.classList.add('fadeInUp', 'animated');
            


            item.parentNode.appendChild(messageDiv);
            

            postData('assets/server.php', formData)
            .then(() => {
                messageImg.src = statusImg.ok;
                
                messageDiv.textContent = statusText.ok;
                messageDiv.appendChild(messageImg);
                
            })
            .catch(() => {
                messageDiv.textContent = statusText.fail;
                messageImg.setAttribute('src', statusImg.fail);
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    messageDiv.classList.remove('fadeInUp');
                    messageDiv.style.display = "none";
                    item.style.display = "block";
                    item.parentNode.style.height = "";
                    chooseFile.forEach(item => {
                        item.textContent = 'Файл не выбран';
                    });
                }, 7000);
            });

        });
    }); 

    upload.forEach((item, index)=> {
        item.addEventListener('input', () => {
            const fullFileName = item.files[0].name,
            fileExtension = fullFileName.split('.')[fullFileName.split('.').length - 1],
            fileName = fullFileName.split('.')[0];
            let name = "";
            if(fileName.length >= 7) {
                name = fileName.substring(0, 8) + "...";
            } else {
                name = fileName + ".";
            }

            chooseFile[index].textContent = name + fileExtension;
            
        });
    });
};

export default forms;