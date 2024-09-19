function moveBee() {
    var bee = document.getElementById("bee");
    var maxX = window.innerWidth - bee.clientWidth;
    var maxY = window.innerHeight - bee.clientHeight;
    var randomX = Math.floor(Math.random() * Math.min(maxX, 100));
    var randomY = Math.floor(Math.random() * Math.min(maxY, 100));
    bee.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    bee.style.transition = "transform 1s";
}
setInterval(moveBee, 500);
function moveBee() {
    var bee = document.getElementById("bee");
    var maxX = window.innerWidth - bee.clientWidth;
    var maxY = window.innerHeight - bee.clientHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    bee.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

setInterval(moveBee, 1000);
