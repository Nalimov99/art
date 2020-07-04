const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    let messageDiv = document.createElement('div'),
        messageImg = document.createElement('img');




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
    

    async function postData(url, json) {
        
        let res = await fetch(url, {
            method: "POST",
            body: json
        });

        return await res;
    }

    function clearInputs() {
        inputs.forEach(item => {
            item.value = "";
        });
    }

    forms.forEach(item => {
        console.log(item);
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(e.target);

            const formData = new FormData(item),
                json = JSON.stringify(Object.fromEntries(formData));
            item.classList.add('fadeOut', 'animated');
            messageDiv.classList.add('fadeInUp', 'animated');
            setTimeout(() => {
                item.style.display = "none";
            }, 400);


            item.parentNode.appendChild(messageDiv);
            

            postData('assets/server.php', json)
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
            });

        });
    }); 
};

export default forms;