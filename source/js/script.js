var pageHeader = document.querySelector('.page-header');
var headerToggle = pageHeader.querySelector('.page-header__toggle');
var mainNav = pageHeader.querySelector('.main-nav');
var mainNavSiteList = mainNav.querySelector('.main-nav__site-list');
var mainNavContact = mainNav.querySelector('.main-nav__contact');
var mainNavSocial = mainNav.querySelector('.main-nav__social');

pageHeader.classList.remove('page-header--nojs');
pageHeader.classList.remove('page-header--white');
mainNav.classList.remove('main-nav--nojs');
mainNavSiteList.classList.remove('main-nav__site-list--open');
mainNavContact.classList.remove('main-nav__contact--open');
mainNavSocial.classList.remove('main-nav__social--open');

headerToggle.addEventListener('click', function (evt) {
  mainNav.classList.toggle('main-nav--closed');
  pageHeader.classList.toggle('page-header--white');
  mainNavSiteList.classList.toggle('main-nav__site-list--open');
  mainNavContact.classList.toggle('main-nav__contact--open');
  mainNavSocial.classList.toggle('main-nav__social--open');
});
