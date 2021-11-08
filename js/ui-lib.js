class UiLib {
    static hide(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            el.style.display = 'none';
        });
    }

    static show(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            el.style.display = 'block';
        });
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
        document.querySelector(selector).innerHTML = html;
    }

    /*
        Element to slide gets the following CSS:

        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease;
    */
    static slideDown(selector) {
        document.querySelector(selector).style.maxHeight = window.screen.height + 'px';
    }

    static slideUp(selector) {
        document.querySelector(selector).style.maxHeight = '0';
    }

    static click(selector, callback) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            el.onclick = callback;
        });
    }

    static hover(selector, callback) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            el.onmouseover = callback;
        });
    }
}