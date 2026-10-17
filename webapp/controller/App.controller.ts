import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";


export default class App extends Controller {
	onInit(): void {
      this.getView()?.addStyleClass((this.getOwnerComponent() as Component).getContentDensityClass() as string);
    }
};
