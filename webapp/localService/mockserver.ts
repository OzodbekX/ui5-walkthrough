import MockServer from "sap/ui/core/util/MockServer";

export default  {
    init:function() {
        const mockServer = new MockServer({
            // Mock server configuration
            rootUri: sap.ui.require.toUrl("ui5/tutorial/walkthrough/V2/Northwind/Northwind.svc/"),
        }); 
        const urlParams=new URLSearchParams(window.location.search);
        MockServer.config({
            autoRespond: true,
			autoRespondAfter: parseInt(urlParams.get("serverDelay") || "500")
        });
        const path = sap.ui.require.toUrl("ui5/tutorial/walkthrough/localService");
        mockServer.simulate(path + "/metadata.xml", path + "/mockdata");
        mockServer.start();



    }
}