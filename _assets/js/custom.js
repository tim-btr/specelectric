$(".aside-form-title").click( function() {
    if($(this).hasClass("_caret-down")) {
        $(this).addClass("_caret-up");
        $(this).removeClass("_caret-down");
    } else {
        if($(this).hasClass("_caret-up")) {
            $(this).removeClass("_caret-up");
            $(this).addClass("_caret-down");
        }
    }
    $(this).siblings(".group-filter__toggle").toggle( "slow" );
});
