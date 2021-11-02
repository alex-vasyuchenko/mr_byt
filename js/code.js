$("#menu-button").click(function() {
    $(".popup-menu").show();
});

$(".popup-menu__more-btn").click(function() {
    $(".popup-menu").hide();
});

$(".popup-menu__background").click(function() {
    $(".popup-menu").hide();
});

$(".popup-menu__tab-link").hover(function() {
    const el = $(this);
    const curTab = el.attr("link");    
    const tabs = [
        "popup-menu__tab1",
        "popup-menu__tab2",
        "popup-menu__tab3"
    ];

    $(".popup-menu__tab-link").removeClass("popup-menu__active-tab-link");
    el.addClass("popup-menu__active-tab-link");

    tabs.forEach(function(tab) {
        const content = $("#"+tab);

        if (tab == curTab)
            content.show();
        else
            content.hide();    
    });
});