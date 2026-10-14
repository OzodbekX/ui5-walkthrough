import XMLView from "sap/ui/core/mvc/XMLView";
XMLView.create({
  viewName: 'ui5.tutorial.walkthrough.view.App',
  id: 'app'
}).then(function(oView) {
  oView.placeAt('content');
});