
const calc = (sizeSelector, materialSelector, servicesSelector, promoSelector, priceBlockSelector) => {
    const size = document.querySelector(sizeSelector),
        material = document.querySelector(materialSelector),
        services = document.querySelector(servicesSelector),
        promo = document.querySelector(promoSelector),
        price = document.querySelector(priceBlockSelector);
    let sum = 0;

    function calcPrice() {
        sum = Math.round((+size.value) + (+material.value) + (+services.value));
        if(size.value == "0" || material.value == "0") {
            price.textContent = "Для расчета нужно выбрать размер картины и материал картины";
        } else if(promo.value === "IWANTPOPART") {
            price.textContent = Math.round(0.7 * sum);
            promo.readOnly = true;
        } else { 
            price.textContent = sum;
        }
    }

    size.addEventListener('change', calcPrice);
    material.addEventListener('change', calcPrice);
    services.addEventListener('change', calcPrice);
    promo.addEventListener('input', calcPrice);
};

export default calc;