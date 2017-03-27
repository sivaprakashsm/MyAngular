System.register(["angular2/platform/browser", "./login.component", "./header.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, login_component_1, header_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_component_1.LoginComponent);
            browser_1.bootstrap(header_component_1.HeaderComponent);
        }
    }
});
//# sourceMappingURL=main.js.map