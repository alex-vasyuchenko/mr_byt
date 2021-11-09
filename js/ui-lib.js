class UiLib {
    static css(selector, cssProp, cssValue) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.style[cssProp] = cssValue;
        });
    }

    static addClass(selector, className) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.classList.add(className);
        });
    }

    static removeClass(selector, className) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.classList.remove(className);
        });
    }

    static hide(selector) {
        this.css(selector, 'display', 'none');
    }

    static show(selector) {
        this.css(selector, 'display', 'block');
    }

    static isVisible(selector) {
        const el = document.querySelector(selector);
        const style = window.getComputedStyle(el);

        return style.display !== 'none';
    }

    static getHtml(selector) {
        return document.querySelector(selector).innerHTML;
    }

    static setHtml(selector, html) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.innerHTML = html;
        });
    }

    static getValue(selector) {
        return document.querySelector(selector).value;
    }

    static setValue(selector, value) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.value = value;
        });
    }

    static click(selector, callback) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.onclick = callback;
        });
    }

    static hover(selector, callback) {
        document.querySelectorAll(selector).forEach(function(el) {
            el.onmouseover = callback;
        });
    }

    /*
        Element to slide gets the following CSS:

        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease;
    */
    static slideDown(selector, onFinish) {
        this.css(selector, 'maxHeight', window.screen.height + 'px');

        if (onFinish)
            setTimeout(onFinish, 400);
    }

    static slideUp(selector, onFinish) {
        this.css(selector, 'maxHeight', 0);

        if (onFinish)
            setTimeout(onFinish, 400);
    }

    /*
        Element to fade gets the following CSS:

        opacity: 0;
        transition: opacity 0.4s ease;
    */
    static fadeIn(selector, onFinish) {
        this.css(selector, 'opacity', 1);
    
        if (onFinish)
            setTimeout(onFinish, 400);
    }            

    static fadeOut(selector, onFinish) {
        this.css(selector, 'opacity', 0);
    
        if (onFinish)
            setTimeout(onFinish, 400);
    }            
}