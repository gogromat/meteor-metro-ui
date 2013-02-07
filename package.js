Package.describe({
	summary : "Metro UI repackaged for Meteor"
});

Package.on_use(function(api) {
	api.use('jquery', 'client');
	api.add_files([
		'metroui/css/modern.css',
		'metroui/css/modern-responsive.css',

		'metroui/javascript/dropdown.js', 
		'metroui/javascript/accordion.js', 
		'metroui/javascript/buttonset.js', 
		'metroui/javascript/carousel.js', 
		'metroui/javascript/input-control.js', 
		'metroui/javascript/pagecontrol.js', 
		'metroui/javascript/rating.js', 
		'metroui/javascript/slider.js', 
		'metroui/javascript/dialog.js', 
		'metroui/javascript/tile-slider.js', 
		'metroui/javascript/tile-drag.js', 
		//'metroui/public/js/assets/jquery.mousewheel.min.js',
		//'metroui/javascript/start-menu.js',
		//'metroui/public/js/modern/dropdown.js'
		]
		, 'client');

	//api.add_files(['metroui/css/theme-dark.css'], 'client');

});
