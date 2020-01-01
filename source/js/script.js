var pageHeaderWrapper = document.querySelector('.page-header__wrapper');
var headerToggle = pageHeaderWrapper.querySelector('.page-header__toggle');
var mainNav = pageHeaderWrapper.querySelector('.main-nav');
// var mainNavSiteList = mainNav.querySelector('.main-nav__site-list');
// var mainNavContact = mainNav.querySelector('.main-nav__contact');
// var mainNavSocial = mainNav.querySelector('.main-nav__social');

pageHeaderWrapper.classList.remove('page-header__wrapper--nojs');
mainNav.classList.remove('main-nav--nojs');
// mainNavSiteList.classList.remove('main-nav__site-list--open');
// mainNavContact.classList.remove('main-nav__contact--open');
// mainNavSocial.classList.remove('main-nav__social--open');

headerToggle.addEventListener('click', function (evt) {
  mainNav.classList.toggle('main-nav--opened');
  pageHeaderWrapper.classList.toggle('page-header__wrapper--opened');
  // mainNavSiteList.classList.toggle('main-nav__site-list--open');
  // mainNavContact.classList.toggle('main-nav__contact--open');
  // mainNavSocial.classList.toggle('main-nav__social--open');
});
