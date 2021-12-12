/** Прописали всё что у нас в dialog */
// var modal = document.querySelector('dialog')

let modal = document.querySelector('dialog')

document.querySelector('#open').onclick = function() {
     modal.showModal(); // добавляет аттрибут open у тега <dialog> и открывает модальное окно.
};



document.querySelector('#close').onclick = function() {
    modal.close(); // убирает аттрибут open из тега <dialog> и закрывает модальное окно.
};