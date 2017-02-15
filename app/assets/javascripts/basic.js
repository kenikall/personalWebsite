// /*
//  * Basic sample
// */

// function addPage(page, book) {
// 	var id, pages = book.turn('pages');
// 	// Create a new element for this page
// 	var element = $('<div />', {});
// 	// Add the page to the flipbook
// 	if (book.turn('addPage', element, page)) {
// 		// Add the initial HTML
// 		// It will contain a loader indicator and a gradient
// 		element.html('<div class="gradient"></div><div class="loader"></div>');
// 		// Load the page
// 		loadPage(page, element);
// 	}
// }

// function loadPage(page, pageElement) {
// 	// Create an image element
// 	var img = $('<img />');
// 	img.mousedown(function(e) {
// 		e.preventDefault();
// 	});
// 	img.load(function() {
// 		// Set the size
// 		$(this).css({width: '100%', height: '100%'});
// 		// Add the image to the page after loaded
// 		$(this).appendTo(pageElement);
// 		// Remove the loader indicator
// 		pageElement.find('.loader').remove();
// 	});
// 	// Load the page
// 	img.attr('src', 'pages/' +  page + '.jpg');
// }

// 	$(document).keydown(function(e){
// 		var previous = 37, next = 39;
// 		switch (e.keyCode) {
// 			case previous:
// 				book.turn('previous');
// 			break;

// 			case next:
// 				book.turn('next');
// 			break;
// 		}


// // http://code.google.com/p/chromium/issues/detail?id=128488
// function isChrome() {
// 	return navigator.userAgent.indexOf('Chrome')!=-1;
// }
