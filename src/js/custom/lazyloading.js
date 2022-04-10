// LazyLoading IMG
var myLazyLoad = new LazyLoad({
	elements_selector: "[data-src], [data-srcset], [data-bg], [data-sizes]",
	load_delay: 100,
	callback_set: function(el) {
		objectFitImages(el);
	}
});
