const PopupMenu = {
    show: function() {
        $("body").css({
            overflow: "hidden"
        });
        $(".popup-menu").show();
        $(".popup-menu__background").fadeIn("slow");
        $(".popup-menu__content").slideDown({
            start: function() {
              $(this).css({
                display: "flex"
              })
            }
          });    
    },
    hide: function() {
        $(".popup-menu__content").slideUp({
            duration: 200,
            complete: function() {
                $(".popup-menu__background").hide();
                $(".popup-menu").hide();
                $("body").css({
                    overflow: "visible"
                });        
            }
        });        
    }
};

$("#menu-button").click(function() {
    PopupMenu.show();
});

$(".popup-menu__more-btn").click(function() {
    PopupMenu.hide();
});

$(".popup-menu__background").click(function() {
    PopupMenu.hide();
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