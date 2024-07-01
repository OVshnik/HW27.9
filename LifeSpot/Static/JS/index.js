const session = new Map();
function handleSession() {

    session.set("userAgent", window.navigator.userAgent);

}
function checkAge() {

    session.set("age", prompt("Пожалуйста, введите ваш возраст"));

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }
}
let sessionLog = function sessionLog() {
    for (let result of session) {
        console.log(result)
    }
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
