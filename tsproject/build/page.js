define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    class Header {
        constructor() {
            const ELEMENT = document.createElement("div");
            ELEMENT.innerText = "this is Header";
            document.body.appendChild(ELEMENT);
        }
    }
    exports.Header = Header;
    class Content {
        constructor() {
            const ELEMENT = document.createElement("div");
            ELEMENT.innerText = "this is Content";
            document.body.appendChild(ELEMENT);
        }
    }
    exports.Content = Content;
    class Footer {
        constructor() {
            const ELEMENT = document.createElement("div");
            ELEMENT.innerText = "this is Footer";
            document.body.appendChild(ELEMENT);
        }
    }
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Page {
        constructor() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
    }
    exports.default = Page;
});
