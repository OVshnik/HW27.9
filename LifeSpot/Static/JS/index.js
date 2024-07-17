const sessionStorage = window.sessionStorage;
const inputParseFunction = function inputParseFunction() {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}
function handleSession() {

    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate",new Date().toLocalString())
    }
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста введите ваш возраст");
        window.sessionStorage.setItem("userAgw", input)

        checker(true)

    } else {
        checker(false)
    }
    logger()
}
let checker = function (newVisit) {
    if (window.sessionStorage.getItem("userAgent") >= 18) {
        if (newVisit)
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
}
let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"));
    console.log('Данные клиента: ' + window.sessionStorage.getItem("userAgent"));
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"));
}
function filterContent() {

    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {

        let videoText = elements[i].querySelector("p").innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {

            elements[i].style.display = 'none';
        } else {

            elements[i].style.display = 'inline-block';
        }
    }
}
function subscribeMessage() {
    setTimeout((() => alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!")), 60000);
}
alert(window.navigator.geolocation.getCurrentPosition());
