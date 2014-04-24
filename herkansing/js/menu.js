/* RESPONSIVE MENU */  
jQuery(function() {
var menuButton	= jQuery('nav > a');
	menu 		= jQuery('nav > ul');
	nav			= jQuery('nav')

jQuery(menuButton).on('click', function(e) {
	e.preventDefault();
	menu.slideToggle();	
	jQuery(nav).toggleClass( "expand" );	
});
});