sap.ui.define(["sap/ui/core/Control"], function(Control) {
  "use strict";

  return Control.extend("ck.expert.control.Point", {
    metadata: {
      properties: {
        x: "any",
        y: "float"
      }
    }
  });
});
