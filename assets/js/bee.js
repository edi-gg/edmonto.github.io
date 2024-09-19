function moveBee() {
    var bee = document.getElementById("bee");
    var maxX = window.innerWidth * .9;
    var maxY = window.innerHeight * .9;
    var randomX = Math.floor(Math.random() * Math.min(maxX, 50));
    var randomY = Math.floor(Math.random() * Math.min(maxY, 50));
    bee.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    bee.style.transition = "transform 1s";
}
setInterval(moveBee, 1000);
setInterval(moveBee, 500);
    var bee = document.getElementById("bee");
    var maxX = window.innerWidth - bee.clientWidth;
    var maxY = window.innerHeight - bee.clientHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    bee.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
    var maxX = window.innerWidth * .9;
    var maxY = window.innerHeight * .9;
setInterval(moveBee, 1000);
