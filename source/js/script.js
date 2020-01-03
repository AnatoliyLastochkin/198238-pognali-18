var pageHeaderWrapper = document.querySelector('.page-header__wrapper');
var headerToggle = pageHeaderWrapper.querySelector('.page-header__toggle');
var mainNav = pageHeaderWrapper.querySelector('.main-nav');

pageHeaderWrapper.classList.remove('page-header__wrapper--nojs');
mainNav.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function (evt) {
  mainNav.classList.toggle('main-nav--opened');
  pageHeaderWrapper.classList.toggle('page-header__wrapper--opened');
});
