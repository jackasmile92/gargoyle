
var progressbar = document.getElementById("progressbar");
var percent = document.getElementById("percent");
var scrollbar = document.getElementById("scrollpath");


var totalHeight = document.body.offsetHeight - window.innerHeight;
window.onscroll = function () {
    var progress = (window.pageYOffset / totalHeight) * 100 + 10;
    progressbar.style.top = progress + "%";
}
