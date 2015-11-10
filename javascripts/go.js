requirejs.config({
	baseUrl : "./javascripts/",
	shim : {
		bootstrap : {
            deps : [ 'jquery'],
            exports: 'bootstrap'
        },
        "bootstrap-select" : {
            deps : [ 'jquery']
        }
	},
	paths : {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"bootstrap-select": "../lib/bower_components/bootstrap-select/dist/js/bootstrap-select"
	}
});

require(["jquery", "bootstrap", "bootstrap-select", "hbs", "phone", "dice"],
	function($, bootstrap, blect, Handlebars, phone, dice) {
	$('.selectpicker').selectpicker();


	}
);