const Popup = {
    isVisible: false,
    show: function(blockClass, duration) {
        Popup.isVisible = true;
        $("body").css({
            overflow: "hidden"
        });
        $("."+blockClass).show();
        $("."+blockClass+"__background").fadeIn(duration);
        $("."+blockClass+"__content").slideDown({
            duration: duration,
            start: function() {
              $(this).css({
                display: "flex"
              })
            }
          });    
    },
    hide: function(blockClass) {
        $("."+blockClass+"__content").slideUp({
            duration: 200,
            complete: function() {
                Popup.isVisible = false;
                $("."+blockClass+"__background").hide();
                $("."+blockClass).hide();
                $("body").css({
                    overflow: "visible"
                });        
            }
        });        
    }
};

const PopupMenu = {
    show: function() {
        Popup.show("popup-menu", 400);
    },
    hide: function() {
        Popup.hide("popup-menu");
    },
    isVisible: function() {
        return $(".popup-menu").is(":visible");
    },
    init: function() {
        $("#menu-button").click(function() {
            if (PopupMenu.isVisible()) {
                PopupMenu.hide();
            } else {
                if (!Popup.isVisible)
                    PopupMenu.show();
            }
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
        
            $(".popup-menu__tab-link").removeClass("popup-menu__tab-link_active");
            el.addClass("popup-menu__tab-link_active");
        
            tabs.forEach(function(tab) {
                const content = $("#"+tab);
        
                if (tab == curTab)
                    content.show();
                else
                    content.hide();    
            });
        });
    }
};

const CityPopupMenu = {
    show: function() {
        Popup.show("city-popup-menu", 200);
    },
    hide: function() {
        Popup.hide("city-popup-menu");
    },
    isVisible: function() {
        return $(".city-popup-menu").is(":visible");
    },
    init: function() {
        $("#city").click(function() {
            if (CityPopupMenu.isVisible()) {
                CityPopupMenu.hide();
            } else {
                if (!Popup.isVisible)
                    CityPopupMenu.show();
            }
        });
        
        $(".city-popup-menu__list-item").click(function() {
            const city = $(this).text();
            $("#city").text(city);
            CityPopupMenu.hide();
        });
        
        $(".city-popup-menu__background").click(function() {
            CityPopupMenu.hide();
        });
    }
};

const Phone = {
    isValid: function(phone) {
        var regex = /^[+]7 *[0-9]{3} *[0-9]{3}[ -]*[0-9]{2}[ -]*[0-9]{2}$/;
        return regex.test(phone);    
    },
    init: function() {
        $(".phone-form").on("submit", function(){
            const phone = $(".phone-form__phone").val();
            const valid = Phone.isValid(phone);
            
            if (!valid) {
                $(".phone-form__phone").addClass('phone-form__phone_error');
            }
        
            return valid;
        });
    }
};

PopupMenu.init();
CityPopupMenu.init();
Phone.init();

