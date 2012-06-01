Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
	name: "oasis",
	appFolder: "app",
	autoCreateViewport: true,
	model: [],
	controllers: ['MainPanel'],
    views: ['MainPanel']

});
