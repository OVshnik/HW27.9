function getUserComment() {
    let userName = prompt('Введите имя');
    let userComment = prompt('Добавьте комментарий');
    addComment(userName,userComment);
}
const addComment = (userName, userComment) => {
    let elem = document.getElementsByClassName("comments")[0];
    let date = new Date().toLocaleString();
    elem.innerHTML += `<div class="comments-text">\n<p>${date}, <b>${userName}</b>:<i>\n${userComment}</i></p></div>`;
}
