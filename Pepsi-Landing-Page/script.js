function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}


document.querySelector('.toggle-button').addEventListener('click', function () {
    document.querySelector('.toggle-button').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
});