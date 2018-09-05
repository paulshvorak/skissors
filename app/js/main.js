;(function () {

	var header = document.querySelector('.js-header');
	var menuBtn = document.querySelector('.js-menu');
	var sidebar = document.querySelector('.js-sidebar')
	var closeSidebar = document.querySelector('.js-sidebar-menu__close');
	var page = document.querySelector('.js-page');

	var filtersBtn = document.querySelector('.js-filters-btn');
	var filters = document.getElementsByClassName('js-filters');

	function toggleFilters() {
		for (var i = 0; i < filters.length; ++i)  {
			filters[i].classList.toggle('visible');
		}
	}

	filtersBtn.onclick = function () {
		toggleFilters();
	}


	function showSidebar() {
		sidebar.classList.add('header-mobile--active');
	}

	function hideSidebar() {
		sidebar.classList.remove('header-mobile--active');
	}

	function toggleScroll() {
		page.classList.toggle('menu-open');
	}

	menuBtn.onclick = function () {
		showSidebar();
		toggleScroll();
	}

	closeSidebar.onclick = function () {
		hideSidebar();
		toggleScroll();
	}

	// window.onscroll = function () {
	// 	setHeaderFixed();
	// };
	//
	// function setHeaderFixed() {
	// 	if (window.scrollY > 0) {
	// 		header.classList.add('header--active');
	// 	} else {
	// 		header.classList.remove('header--active');
	// 	}
	// }

})();