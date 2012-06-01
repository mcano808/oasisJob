
//Default view made in App.js
Ext.define('oasis.view.Viewport', {
	extend: 'Ext.container.Viewport',
    requires:['oasis.view.MainPanel'],
	
	initComponent: function(){
		this.layout = 'fit';
		this.items = [{
			xtype:'mainpanel'
		}];

		return this.callParent(arguments);
	}
});
