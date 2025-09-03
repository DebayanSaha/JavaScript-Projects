let elem = document.querySelectorAll("#elem");

elem.forEach(function (val) {
    val.addEventListener("mousemove", function (dets) {
        val.childNodes[3].style.left = dets.x + "px";
    });
    val.addEventListener("mouseenter", function (dets) {
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", function (dets) {
        val.childNodes[3].style.opacity = 0;
    });
});
