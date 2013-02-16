Package.describe({
	summary : "Metro UI repackaged for Meteor"
});

Package.on_use(function(api) {
	//api.use('jquery', 'client');
	api.add_files([

		// CSS FILES
		'metrouicss/css/modern.css',
		'metrouicss/css/modern-responsive.css',
		//'metrouicss/css/theme-dark.css',

		// FONTS
		'metrouicss/fonts/iconFont.woff',
		'metrouicss/fonts/iconFont.eot',
		'metrouicss/fonts/iconFont.ttf',
		'metrouicss/fonts/iconFont.svg',

		// JAVASCRIPT
		'metrouicss/public/js/assets/jquery-1.9.0.min.js',
		//'metrouicss/public/css/prettify.css',
		'metrouicss/javascript/dropdown.js', 
		'metrouicss/javascript/accordion.js', 
		'metrouicss/javascript/buttonset.js', 
		//'metrouicss/javascript/carousel.js', 
		'metrouicss/javascript/input-control.js', 
		'metrouicss/javascript/pagecontrol.js', 
		//'metrouicss/javascript/rating.js', 
		//'metrouicss/javascript/slider.js', 
		'metrouicss/javascript/dialog.js', 
		'metrouicss/javascript/tile-slider.js', 
		'metrouicss/javascript/tile-drag.js',

		//'metrouicss/public/js/assets/jquery.mousewheel.min.js',
		//'metrouicss/javascript/start-menu.js',
		]
		, 'client');

});
