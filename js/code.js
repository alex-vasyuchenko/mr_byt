class Popup {
    static isVisible = false;

    static show(blockClass) {
        Popup.isVisible = true;
        document.body.style.overflow = "hidden";
        UiLib.show("."+blockClass);        
        setTimeout(function(){
            document.querySelector("."+blockClass+"__background").style.opacity = 1;
            UiLib.slideDown("."+blockClass+"__content");
        }, 100);        
    }

    static hide(blockClass) {
        Popup.isVisible = false;
        document.querySelector("."+blockClass+"__background").style.opacity = 0;
        UiLib.slideUp("."+blockClass+"__content");
        setTimeout(function(){
            UiLib.hide("."+blockClass);
            document.body.style.overflow = "visible";    
        }, 400);
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
        UiLib.click("#menu-button", function() {
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
        
            document.querySelectorAll(".popup-menu__tab-link").forEach(function(el){
                el.classList.remove("popup-menu__tab-link_active");
            })
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
            const phone = document.querySelector(".phone-form__phone").value;
            const valid = Phone.isValid(phone);
            
            if (!valid) {
                document.querySelector(".phone-form__phone").classList.add('phone-form__phone_error');
            }
        
            return valid;
        };        
    }
}

PopupMenu.init();
CityPopupMenu.init();
Phone.init();

