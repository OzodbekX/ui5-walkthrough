import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Controller from "sap/ui/core/mvc/Controller";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

export default {
  statusText: function (this: Controller, status: string): string | undefined {
    const oResourceBundle = (
      this.getOwnerComponent().getModel("i18n") as ResourceModel
    ).getResourceBundle() as ResourceBundle;
    switch (status) {
      case "A":
        return oResourceBundle.getText("invoiceStatusA");
      case "B":
        return oResourceBundle.getText("invoiceStatusB");
      case "C":
        return oResourceBundle.getText("invoiceStatusC");
      default:
        return status;
    }
  },
};
