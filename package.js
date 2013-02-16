Package.describe({
  summary : "Metro UI repackaged for Meteor"
});

Package.on_use(function (api) {
	// CSS FILES
	//'metrouicss/css/theme-dark.css',
	api.add_files('metrouicss/css/modern.css', 			 'client');
	api.add_files('metrouicss/css/modern-responsive.css','client');

	// JAVASCRIPT
	//'metrouicss/public/js/assets/jquery.mousewheel.min.js',
	//'metrouicss/javascript/start-menu.js',], 'client');
		//'metrouicss/public/css/prettify.css',
	api.add_files('metrouicss/public/js/assets/jquery-1.9.0.min.js','client');
	api.add_files('metrouicss/javascript/dropdown.js', 'client');
	api.add_files('metrouicss/javascript/accordion.js','client');
	api.add_files('metrouicss/javascript/buttonset.js','client');
	api.add_files('metrouicss/javascript/carousel.js', 'client'); 
	api.add_files('metrouicss/javascript/input-control.js','client');
	api.add_files('metrouicss/javascript/pagecontrol.js','client');
		//'metrouicss/javascript/rating.js', 
		//'metrouicss/javascript/slider.js', 
	api.add_files('metrouicss/javascript/dialog.js', 	 'client');
	api.add_files('metrouicss/javascript/tile-slider.js','client');
	api.add_files('metrouicss/javascript/tile-drag.js',  'client');

	// FONTS
	api.add_files('metrouicss/fonts/iconFont.woff', 'client');
	api.add_files('metrouicss/fonts/iconFont.eot',  'client');
	api.add_files('metrouicss/fonts/iconFont.ttf',  'client');
	api.add_files('metrouicss/fonts/iconFont.svg',  'client');


	// XXX Similar to bootstrap-jasny, because of absolute path
	// we need to rewrite font-face rules to point to /packages/metrouicss/...
	api.add_files('metrouicss-override.css', 'client');
});
