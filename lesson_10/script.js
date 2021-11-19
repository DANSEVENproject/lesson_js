const chapter = document.querySelectorAll('.book');
chapter[0].parentNode.insertBefore(chapter[1], chapter[0]);
chapter[5].parentNode.insertBefore(chapter[2], chapter[5]);
chapter[3].parentNode.insertBefore(chapter[4], chapter[3]);
chapter[2].parentNode.insertBefore(chapter[5], chapter[2]);

const background = document.querySelector('body');
background.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

(chapter[4].querySelector('a')).textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

const listHtml2 = chapter[0].querySelectorAll('li');
listHtml2[10].parentNode.insertBefore(listHtml2[2], listHtml2[10]);
listHtml2[7].parentNode.insertBefore(listHtml2[8], listHtml2[7]);
listHtml2[4].parentNode.insertBefore(listHtml2[6], listHtml2[4]);
listHtml2[6].parentNode.insertBefore(listHtml2[8], listHtml2[6]);
const listHtml5 = chapter[5].querySelectorAll('li');
listHtml5[10].parentNode.insertBefore(listHtml5[8], listHtml5[10]);
listHtml5[8].parentNode.insertBefore(listHtml5[5], listHtml5[8]);
listHtml5[2].parentNode.insertBefore(listHtml5[9], listHtml5[2]);
listHtml5[2].parentNode.insertBefore(listHtml5[3], listHtml5[2]);
listHtml5[2].parentNode.insertBefore(listHtml5[4], listHtml5[2]);

(chapter[2].querySelectorAll('li')[8]).insertAdjacentHTML('beforeend',
    '<li>Глава 8: За пределами ES6</li>');