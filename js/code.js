class Popup {
    static isVisible = false;

    static show(blockClass) {
        Popup.isVisible = true;
        UiLib.css('body', 'overflow', 'hidden');
        UiLib.show("."+blockClass);        
        setTimeout(function(){
            UiLib.fadeIn("."+blockClass+"__background");
            UiLib.slideDown("."+blockClass+"__content");
        }, 50);        
    }

    static hide(blockClass) {
        Popup.isVisible = false;
        UiLib.fadeOut("."+blockClass+"__background");
        UiLib.slideUp("."+blockClass+"__content", function() {
            UiLib.hide("."+blockClass);
            UiLib.css('body', 'overflow', 'visible');
        });
    }
}

class PopupMenu extends Popup {
    static show() {
        super.show("popup-menu");
    }

    static hide() {
        super.hide("popup-menu");
    }

    static isVisible() {
        return UiLib.isVisible(".popup-menu");
    }

    static init() {
        UiLib.click("#menu__button", function() {
            if (PopupMenu.isVisible()) {
                PopupMenu.hide();
            } else {
                if (!Popup.isVisible)
                    PopupMenu.show();
            }
        });
        
        UiLib.click(".popup-menu__more-btn", function() {
            PopupMenu.hide();
        });
        
        UiLib.click(".popup-menu__background", function() {
            PopupMenu.hide();
        });
        
        UiLib.hover(".popup-menu__tab-link", function(e) {
            const el = e.target;
            const curTab = el.getAttribute("link");
            const tabs = [
                "popup-menu__tab1",
                "popup-menu__tab2",
                "popup-menu__tab3"
            ];
        
            UiLib.removeClass(".popup-menu__tab-link", "popup-menu__tab-link_active");
            el.classList.add("popup-menu__tab-link_active");
        
            tabs.forEach(function(tab) {
                const content = "#"+tab;
        
                if (tab == curTab)
                    UiLib.show(content);
                else
                    UiLib.hide(content);
            });
        });
    }
}

class CityPopupMenu extends Popup {
    static show() {
        super.show("city-popup-menu");
    }

    static hide() {
        super.hide("city-popup-menu");
    }

    static isVisible() {
        return UiLib.isVisible(".city-popup-menu");
    }

    static init() {
        UiLib.click("#city", function() {
            if (CityPopupMenu.isVisible()) {
                CityPopupMenu.hide();
            } else {
                if (!Popup.isVisible)
                    CityPopupMenu.show();
            }
        });
        
        UiLib.click(".city-popup-menu__list-item", function(e) {
            const city = e.target.innerHTML;
            UiLib.setHtml("#city", city);
            CityPopupMenu.hide();
        });
        
        UiLib.click(".city-popup-menu__background", function() {
            CityPopupMenu.hide();
        });
    }
}

class Phone {
    static isValid(phone) {
        var regex = /^[+]7 *[0-9]{3} *[0-9]{3}[ -]*[0-9]{2}[ -]*[0-9]{2}$/;
        return regex.test(phone);    
    }

    static init() {
        document.querySelector(".phone-form").onsubmit = function(){
            const phone = UiLib.getValue(".phone-form__phone");
            const valid = Phone.isValid(phone);
            
            if (!valid) {
                UiLib.addClass(".phone-form__phone", "phone-form__phone_error");
            }
        
            return valid;
        };        
    }
}

PopupMenu.init();
CityPopupMenu.init();
Phone.init();

const swiper = new Swiper('.masters-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.masters-swiper__pagination'
    },  
    navigation: {
        nextEl: '.masters-swiper__next',
        prevEl: '.masters-swiper__prev'
    }  
});