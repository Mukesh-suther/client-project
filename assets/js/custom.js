$('.ham-menu').click(function(e){
	e.stopPropagation();
	$(this).find('.ham-menu-list').toggle();
});
$(document).click(function(){
	$('.ham-menu-list').css('display','none');
})


$('.mbl-ham').click(function(e){
	e.stopPropagation();
	$(this).find('.ham-menu-list').toggle();
});
$(document).click(function(){
	$('.ham-menu-list').css('display','none');
})