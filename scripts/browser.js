var cWidth = document.documentElement.clientWidth;
console.log(cWidth);
if (cWidth < 768) {
    window.location.href = 'register.html';
}