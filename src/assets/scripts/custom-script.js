
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
		$(".main-navh").click(function(){
			$("#wrapper").removeClass("enlarged");
		});
});

	function activeMenu(e){

            if($("#wrapper").hasClass("enlarged")){
                var this1=e;
                setTimeout(function(){
                    console.log($(this1).attr('class'));
                    $(this1).parent().addClass("active"); // add active to li of the current link
                    $(this1).addClass("active");
                    $(this1).attr("aria-expanded",true);
                    $(this1).parent('li').find('.nav').addClass("in");
                    $(this1).parent('li').find('.nav').attr("aria-expanded",true);
                    $(this1).parent('li').find('.nav').removeAttr("style");
                },300);
            }
            $("#wrapper").removeClass("enlarged");
	}
	function deActiveMenu() {
        // === following js will activate the menu in left side bar based on url ====
        $("#sidebar-menu a").each(function () {
            if (this.href == window.location.href) {
                $(this).removeClass("active");
                $(this).parent().removeClass("active"); // add active to li of the current link
                $(this).parent().parent().removeClass("in");
                $(this).parent().parent().prev().removeClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().removeClass("active");
                $(this).parent().parent().parent().parent().removeClass("in"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().removeClass("active");
            }
        });
    }



