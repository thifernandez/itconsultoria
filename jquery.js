(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        // Node.js environment
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        // Browser environment
        factory(global);
    }
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    var S = function(selector, context) {
        return new S.fn.init(selector, context);
    };

    S.fn = S.prototype = {
        constructor: S,
        length: 0,
        init: function(selector, context) {
            if (!selector) {
                return this;
            }
            // ... other logic for initialization
        }
    };

    // Utility functions
    S.isArray = Array.isArray;
    S.parseJSON = JSON.parse;
    S.nodeName = function(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    };
    S.isFunction = function(obj) {
        return typeof obj === "function";
    };
    S.isWindow = function(obj) {
        return obj != null && obj === obj.window;
    };
    S.camelCase = function(string) {
        return string.replace(/-([a-z])/g, function(match, letter) {
            return letter.toUpperCase();
        });
    };
    S.type = function(obj) {
        return obj == null ? String(obj) : typeof obj;
    };
    S.now = Date.now;

    S.isNumeric = function(obj) {
        var type = S.type(obj);
        return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
    };

    S.trim = function(text) {
        return text == null ? "" : (text + "").replace(/^\s+|\s+$/g, "");
    };

    // No conflict logic
    var _jQuery = window.jQuery,
        _$$ = window.$;
    
    S.noConflict = function(deep) {
        if (window.$ === S) {
            window.$ = _$$;
        }
        if (deep && window.jQuery === S) {
            window.jQuery = _jQuery;
        }
        return S;
    };

    // AMD support for jQuery
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return S;
        });
    }

    // Expose jQuery to global object
    if (!noGlobal) {
        window.jQuery = window.$ = S;
    }

    return S;
}));
