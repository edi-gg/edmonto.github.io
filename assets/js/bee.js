function moveBee() {
    var bee = document.getElementById("bee");
    var maxX = window.innerWidth - bee.clientWidth;
    var maxY = window.innerHeight - bee.clientHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    bee.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

setInterval(moveBee, 1000);
