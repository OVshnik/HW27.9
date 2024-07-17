function getUserReview() {
    let comment = new Comment()
    if (comment.empty) {
        return;
    }
    if (confirm('Хотите чтобы ваш комментарий оценили другие пользователи')) {
        let review = Object.create(comment);
        review.rate = 0;
        writeReview(review);
    }
    else {
        writeReview(comment);
    }
}
function Comment() {
    this.userName = prompt('Введите имя')
    if (this.userName == null) {
        return
    }
    this.comment = prompt('Напишите свой отзыв')
    if (this.comment == null) {
        return
    }
    this.date = new Date().toLocaleString()
}
const writeReview = review => {
    let likeCounter = '';
    let id = Math.random();
    if (review.hasOwnProperty('rate')) {
        likeCounter += `<button id ="${id}" onclick="addLike(this.id)">❤️ ${review.rate}</button >`;
    }
    let elem = document.getElementsByClassName("comments")[0];
    elem.innerHTML += `<div class="comments-text">\n<p>${review['date']}, 
    <b>${review['userName']}</b>:<i>\n${review['comment']}</i>${likeCounter}</p></div>`;
}
function addLike(id) {

    let element = document.getElementById(id);

    let array = element.innerText.split(' ')


    let resultNum = parseInt(array[array.length - 1], 10);

    resultNum += 1

    array[array.length - 1] = `${resultNum}`
    console.log(resultNum)

    element.innerText = array.join(' ')
    document.fi
}