function toggleTheme() {
    const body = document.querySelector("body");
    const icon = document.getElementById("icon");
    if (body.className === 'dark') {
        body.className = 'light'
        icon.className = 'fa fa-moon-o'
    }
    else {
        body.className = 'dark'
        icon.className = 'fa fa-sun-o'
    }
}

const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const homeAnchor = document.getElementById('home-anchor');
const stackAnchor = document.getElementById('stack-anchor');
const commAnchor = document.getElementById('comm-anchor');
const eduAnchor = document.getElementById('edu-anchor');
const expAnchor = document.getElementById('exp-anchor');
const projAnchor = document.getElementById('proj-anchor');

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
})

homeAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
stackAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
commAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
eduAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
expAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
projAnchor.addEventListener('click', () => {
    ul.classList.toggle('show');
})
$(".pattern").click(function () {
  $(this).removeClass("close");
  $(this).addClass("fill");
  console.log($(window).width());
  if ($(window).width() < 650 || $(window).height() < 850) {
    $(window).scrollTop(0);

    $(".body").css({
      position: "fixed",
      top: `-${window.scrollY}px`
      // height: "100vh",
      // width: "100vw"
    });
  }
});

$(".icon").click(function (e) {
  e.stopPropagation();
  $parent = $(this).parent();
  $parent.removeClass("fill");
  $parent.addClass("close");
  if ($(window).width() <= 768 || $(window).height() < 850)
    $(".body").css({ position: "relative", top: "" });
});
