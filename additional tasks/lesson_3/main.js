'use strict';

const country = document.querySelector('#country'),
    citySelect = document.querySelector('#city'),
    result = document.querySelector('.result');

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

country.addEventListener('input', () => {
    if (citySelect.childElementCount) {
        while (citySelect.firstChild) {
            citySelect.removeChild(citySelect.firstChild);
        }
    }

    citySelect.style.display = 'block';

    let Country,
        Element,
        City = '';

    country.childNodes.forEach((item) => {
        if (item.value === country.value) {
            Element = item.value;
            Country = item.textContent;
        }
    });
    for (let key in cityArr) {
        if (key === Element) {
            cityArr[key].forEach((item) => {
                const div = document.createElement('option');
                div.value = item;
                div.textContent = item;
                citySelect.insertAdjacentElement('beforeend', div);
                citySelect.addEventListener('input', () => {
                    citySelect.childNodes.forEach((item) => {
                        if (item.value === citySelect.value) {
                            City = item.textContent;
                            result.textContent = `${Country} ${City}`;
                        }
                    })
                })
            })
        }
    }
});