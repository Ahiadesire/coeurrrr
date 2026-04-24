function showPage(id) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function start() {
    showPage("slide1");
}

function nextSlide(current) {
    showPage("slide" + (current + 1));
}

function end() {
    showPage("end");
}