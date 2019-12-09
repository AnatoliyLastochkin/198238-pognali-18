var pageHeader = document.querySelector('.page-header');
var headerToggle = pageHeader.querySelector('.page-header__toggle');
var mainNav = pageHeader.querySelector('.main-nav');

pageHeader.classList.remove('page-header--nojs');
mainNav.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function (evt) {
  mainNav.classList.toggle('main-nav--closed');
  pageHeader.classList.toggle('page-header--blue');
});
