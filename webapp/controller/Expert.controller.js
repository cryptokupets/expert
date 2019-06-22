sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
  function(Controller, UIComponent) {
    "use strict";

    return Controller.extend("ck.expert.controller.Expert", {
      onInit: function() {
        UIComponent.getRouterFor(this)
          .getRoute("expert")
          .attachPatternMatched(this.onRouteMatched, this);
      },

      onRouteMatched: function(oEvent) {
        var sId = oEvent.getParameter("arguments").id;
        var oView = this.getView();
				var oModel = oView.getModel();
        oModel.metadataLoaded().then(function() {
          oView.bindElement({
            path: "/Buffers('" + sId + "')",
            parameters: {
              $expand: "Rows"
            }
          });
        });
      },

      onNavBack: function() {
        window.history.go(-1);
      }
    });
  }
);
