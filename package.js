Package.describe({
  summary : "Metro UI repackaged for Meteor"
});

Package.on_use(function (api) {
	// CSS FILES
	//'metrouicss/css/theme-dark.css',
	api.add_files('css/modern.css', 'client');
	api.add_files('css/modern-responsive.css', 'client');

	// JAVASCRIPT
	//'metrouicss/public/js/assets/jquery.mousewheel.min.js',
	//'metrouicss/javascript/start-menu.js',], 'client');
		//'metrouicss/public/css/prettify.css',
	api.add_files('metrouicss2/public/js/assets/jquery-1.9.0.min.js', 	'client');
	api.add_files('metrouicss2/javascript/dropdown.js', 			  		'client');
	api.add_files('metrouicss2/javascript/accordion.js', 				'client');
	api.add_files('metrouicss2/javascript/buttonset.js', 				'client');
		//'metrouicss/javascript/carousel.js', 
	api.add_files('metrouicss2/javascript/input-control.js', 			'client');
	api.add_files('metrouicss2/javascript/pagecontrol.js', 				'client');
		//'metrouicss/javascript/rating.js', 
		//'metrouicss/javascript/slider.js', 
	api.add_files('metrouicss2/javascript/dialog.js', 					'client');
	api.add_files('metrouicss2/javascript/tile-slider.js', 				'client');
	api.add_files('metrouicss2/javascript/tile-drag.js', 				'client');

	// FONTS
	api.add_files('fonts/iconFont.woff', 'client');
	api.add_files('fonts/iconFont.eot', 'client');
	api.add_files('fonts/iconFont.ttf', 'client');
	api.add_files('fonts/iconFont.svg', 'client');
});
