let btnDown = document.getElementById('down'); //on button in Hero section
btnDown.onclick = function scrollDown() {
  window.scrollTo({
    top: 9999, //device height in px
    behavior: 'smooth', // slow scroll
  });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
