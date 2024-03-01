import scrollSpy from 'scroll-app-laclac'

const options = {
  sectionClass: '.scrollspy',           // Query selector to your sections
  menuActiveTarget: '.menu-item',       // Query selector to your elements that will be added `active` class
  offset: 100,                          // Menu item will active before scroll to a matched section 100px
  scrollContainer: '.scroll-container', // Listen scroll behavior on `.scroll-container` instead of `window`
}

// init:
scrollSpy(document.getElementById('main-menu'), options)
