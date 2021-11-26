'use strict';

const listFunction = {
    toDo: document.querySelector('#todo'),
    inputAddItem: document.querySelector('.header-input'),
    addButtonList: document.querySelector('.header-button'),
    toComplete: document.querySelector('#completed'),
    container: document.querySelector('.container'),
    del(element) {
        element.remove('todo-item');
        element.removeEventListener('click', function() {
            listFunction.del(newLi);
            listFunction.save();
        });
    },
    addComplete(element, value) {
        listFunction.del(element);
        const newLi = document.createElement('li');
        const buttonAdd = document.createElement('button');
        const buttonRemove = document.createElement('button');
        const buttonWrapper = document.createElement('div');
        const spanText = document.createElement('span');
        newLi.classList.add('todo-item');
        spanText.classList.add('todo-description');
        buttonAdd.classList.add('todo-complete');
        buttonRemove.classList.add('todo-remove');
        buttonWrapper.classList.add('todo-buttons');
        spanText.textContent = value;

        buttonWrapper.appendChild(buttonRemove);
        buttonWrapper.appendChild(buttonAdd);

        newLi.appendChild(buttonWrapper);
        newLi.appendChild(spanText);
        this.toComplete.insertAdjacentElement('afterbegin', newLi);
        buttonAdd.addEventListener('click', function() {
            listFunction.addComplete(newLi);
            listFunction.save();
        });
        buttonRemove.addEventListener('click', function() {
            listFunction.del(newLi);
            listFunction.save();
        })
    },
    addList() {
        if (this.inputAddItem.value !== '') {
            const newLi = document.createElement('li');
            const buttonAdd = document.createElement('button');
            const buttonRemove = document.createElement('button');
            const buttonWrapper = document.createElement('div');
            const spanText = document.createElement('span');
            newLi.classList.add('todo-item');
            spanText.classList.add('todo-description');
            buttonAdd.classList.add('todo-complete');
            buttonRemove.classList.add('todo-remove');
            buttonWrapper.classList.add('todo-buttons');
            spanText.textContent = this.inputAddItem.value;

            buttonWrapper.appendChild(buttonRemove);
            buttonWrapper.appendChild(buttonAdd);

            newLi.appendChild(buttonWrapper);
            newLi.appendChild(spanText);
            this.toDo.insertAdjacentElement('afterbegin', newLi);
            buttonAdd.addEventListener('click', function() {
                listFunction.addComplete(newLi, spanText.textContent);
                listFunction.save();
            });
            buttonRemove.addEventListener('click', function() {
                listFunction.del(newLi);
                listFunction.save();
            })
            this.inputAddItem.value = '';
        }
    },
    completion(list, index) {
        const newLi = list.querySelectorAll('li')[index];
        const buttonAdd = list.querySelectorAll('.todo-complete')[index];
        const buttonRemove = list.querySelectorAll('.todo-remove')[index];
        const spanText = list.querySelectorAll('.todo-description')[index];

        buttonAdd.addEventListener('click', function() {
            listFunction.addComplete(newLi, spanText.textContent);
            listFunction.save();
        });
        buttonRemove.addEventListener('click', function() {
            listFunction.del(newLi);
            listFunction.save();
        })
    },
    init() {
        this.getLocalStorage();
        this.toDo = document.querySelector('#todo');
        this.inputAddItem = document.querySelector('.header-input');
        this.addButtonList = document.querySelector('.header-button');
        this.toComplete = document.querySelector('#completed');
        this.container = document.querySelector('.container');
        for (let i = 0; i < this.toDo.childElementCount; i++) {
            this.completion(this.toDo, i);
        }
        for (let i = 0; i < this.toComplete.childElementCount; i++) {
            this.completion(this.toComplete, i);
        }

        this.addButtonList.addEventListener('click', function() {
                listFunction.addList();
                listFunction.save();
            }),
            document.addEventListener('change', function() {
                listFunction.addList();
                listFunction.save();
            })
    },
    getLocalStorage() {
        this.container.innerHTML = localStorage.getItem('toDo');
    },
    save() {
        const html = this.container.innerHTML;
        localStorage.setItem('toDo', html);
    }
}
listFunction.init();