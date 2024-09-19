function moveBee() {
    var bee = document.getElementById("bee");
    var maxX = window.innerWidth * .9 - bee.clientWidth;
    var maxY = window.innerHeight * .9 - bee.clientHeight;
    if (maxX < 0) {
        maxX = 0;
    }
    if (maxY < 0) {
        maxY = 0;
    }
    var randomX = Math.floor(Math.random() * Math.min(maxX, 10));
    var randomY = Math.floor(Math.random() * Math.min(maxY, 10));
    bee.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    bee.style.transition = "transform 1s";
}
setInterval(moveBee, 1000);
function moveBee() {
    var bee = document.getElementById("bee");
    var maxX = window.innerWidth - bee.clientWidth;
    var maxY = window.innerHeight - bee.clientHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    bee.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

setInterval(moveBee, 1000);
