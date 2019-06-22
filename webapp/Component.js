sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "ck/expert/assets/d3.min",
    "ck/expert/assets/moment-with-locales.min"
  ],
  function(UIComponent) {
    "use strict";

    return UIComponent.extend("ck.expert.Component", {
      metadata: {
        manifest: "json"
      },

      init: function() {
        UIComponent.prototype.init.apply(this, arguments);
      }
    });
  }
);
