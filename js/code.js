class Popup {
    static isVisible = false;

    static slideRight(selector, onFinish) {
        UiLib.setCss(selector, "margin-left", "100%");

        if (onFinish)
            setTimeout(onFinish, 400);
    }

    static slideLeft(selector, onFinish) {
        UiLib.setCss(selector, "margin-left", "0");

        if (onFinish)
            setTimeout(onFinish, 400);
    }

    static show(blockClass, slideHeight) {
        Popup.isVisible = true;
        UiLib.setCss('body', 'overflow', 'hidden');
        UiLib.show("."+blockClass);        
        setTimeout(() => {
            UiLib.fadeIn("."+blockClass+"__background");
            const contentSelector = "." + blockClass + "__content";
            if (slideHeight) {
                UiLib.slideDown(contentSelector);                            
            } else {
                this.slideLeft(contentSelector);
            }
        }, 50);        
    }

    static hide(blockClass, slideHeight) {
        Popup.isVisible = false;
        UiLib.fadeOut("."+blockClass+"__background");

        const contentSelector = "." + blockClass + "__content";
        const onFinish = () => {
            UiLib.hide("."+blockClass);
            UiLib.setCss('body', 'overflow', 'visible');
        };

        if (slideHeight) {
            UiLib.slideUp(contentSelector, onFinish);
        } else {
            this.slideRight(contentSelector, onFinish);
        }
    }
}

class PopupMenu extends Popup {
    static show() {
        super.show("popup-menu", true);
    }

    static hide() {
        super.hide("popup-menu", true);
    }

    static isVisible() {
        return UiLib.isVisible(".popup-menu");
    }

    static init() {
        UiLib.click("#menu__button", () => {
            if (PopupMenu.isVisible()) {
                PopupMenu.hide();
            } else {
                if (!Popup.isVisible)
                    PopupMenu.show();
            }
        });
        
        UiLib.click(".popup-menu__more-btn", () => {
            PopupMenu.hide();
        });
        
        UiLib.click(".popup-menu__background", () => {
            PopupMenu.hide();
        });

        const tabLinks = document.querySelectorAll(".popup-menu__tab-link");
        const tabContents = document.querySelectorAll(".popup-menu__tab");
        
        tabLinks.forEach((elHover, indexHover) => {
            elHover.addEventListener('mouseover', (e) => {
                tabLinks.forEach((el, index) => {
                    if (indexHover === index) {
                        el.classList.add("popup-menu__tab-link_active");            
                        tabContents[index].classList.add("popup-menu__tab_active");
                    } else {
                        el.classList.remove("popup-menu__tab-link_active");       
                        tabContents[index].classList.remove("popup-menu__tab_active");     
                    }
                })
            });            
        });
    }
}

class MobilePopupMenu extends Popup {
    static show() {
        super.show("mobile-popup-menu", false);
    }

    static hide() {
        super.hide("mobile-popup-menu", false);
    }

    static isVisible() {
        return UiLib.isVisible(".mobile-popup-menu");
    }

    static init() {
        UiLib.click("#menu__mobile-button", () => {
            if (MobilePopupMenu.isVisible()) {
                MobilePopupMenu.hide();
            } else {
                if (!Popup.isVisible)
                MobilePopupMenu.show();
            }
        });        
    }
}

class CityPopupMenu extends Popup {
    static show() {
        super.show("city-popup-menu", true);
    }

    static hide() {
        super.hide("city-popup-menu", true);
    }

    static isVisible() {
        return UiLib.isVisible(".city-popup-menu");
    }

    static init() {
        UiLib.click("#city", () => {
            if (CityPopupMenu.isVisible()) {
                CityPopupMenu.hide();
            } else {
                if (!Popup.isVisible)
                    CityPopupMenu.show();
            }
        });
        
        UiLib.click(".city-popup-menu__list-item", (e) => {
            const city = e.target.innerHTML;
            UiLib.setHtml("#city", city);
            CityPopupMenu.hide();
        });
        
        UiLib.click(".city-popup-menu__background", () => {
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
        document.querySelector(".phone-form").onsubmit = () => {
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
MobilePopupMenu.init();
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