function burgerOpenClose(){
    if ($("#menu").hasClass("closeBurgerMenu")){
        $("#menu").removeClass("closeBurgerMenu");
        $("#menu").addClass("openBurgerMenu");
        $('.items').each(function() {
            $(this).addClass('itemsShow')
        });
        $(".buttonForBurger").removeClass('buttonClose');
        $(".buttonForBurger").addClass('buttonOpen');
    }else{
        $("#menu").removeClass("openBurgerMenu");
        $("#menu").addClass("closeBurgerMenu");
        $('.items').each(function() {
            $(this).addClass('itemsHidde')
        });
        $(".buttonForBurger").removeClass('buttonOpen');
        $(".buttonForBurger").addClass('buttonClose');
    }
}