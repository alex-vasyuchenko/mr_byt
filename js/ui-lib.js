class UiLib {
    static setCss(selector, cssProp, cssValue) {
        document.querySelectorAll(selector).forEach((el) => {
            el.style[cssProp] = cssValue;
        });
    }

    static getCss(selector, cssProp) {
        const el = document.querySelector(selector);
        const styles = window.getComputedStyle(el);

        return styles[cssProp];
    }

    static addClass(selector, className) {
        document.querySelectorAll(selector).forEach((el) => {
            el.classList.add(className);
        });
    }

    static removeClass(selector, className) {
        document.querySelectorAll(selector).forEach((el) => {
            el.classList.remove(className);
        });
    }

    static hide(selector) {
        this.setCss(selector, 'display', 'none');
    }

    static show(selector) {
        this.setCss(selector, 'display', 'block');
    }

    static isVisible(selector) {
        return this.getCss(selector, 'display') !== 'none';
    }

    static getHtml(selector) {
        return document.querySelector(selector).innerHTML;
    }

    static setHtml(selector, html) {
        document.querySelectorAll(selector).forEach((el) => {
            el.innerHTML = html;
        });
    }

    static getValue(selector) {
        return document.querySelector(selector).value;
    }

    static setValue(selector, value) {
        document.querySelectorAll(selector).forEach((el) => {
            el.value = value;
        });
    }

    static click(selector, callback) {
        document.querySelectorAll(selector).forEach((el) => {
            el.addEventListener('click', callback);
        });
    }

    static hover(selector, callback) {
        document.querySelectorAll(selector).forEach((el) => {
            el.addEventListener('mouseover', callback);            
        });
    }

    /*
        Element to slide gets the following CSS:

        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease;
    */
    static slideDown(selector, onFinish) {
        this.setCss(selector, 'max-height', window.screen.height + 'px');

        if (onFinish)
            setTimeout(onFinish, 400);
    }

    static slideUp(selector, onFinish) {
        this.setCss(selector, 'max-height', 0);

        if (onFinish)
            setTimeout(onFinish, 400);
    }

    /*
        Element to fade gets the following CSS:

        opacity: 0;
        transition: opacity 0.4s ease;
    */
    static fadeIn(selector, onFinish) {
        this.setCss(selector, 'opacity', 1);
    
        if (onFinish)
            setTimeout(onFinish, 400);
    }            

    static fadeOut(selector, onFinish) {
        this.setCss(selector, 'opacity', 0);
    
        if (onFinish)
            setTimeout(onFinish, 400);
    }            
}