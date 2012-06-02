Ext.Loader.setConfig({
    enabled:true
});

Ext.application({
	name: "oasis",
	appFolder: "app",
	autoCreateViewport: true,
    stores:[],
	models: [],
	controllers: ['MainPanel'],
    views: [
        'MainPanel',
        'toptab.JobTab',
        'toptab.CompanyTab',
        'toptab.NotesTab',
        'BottomGrid'
    ]

});
