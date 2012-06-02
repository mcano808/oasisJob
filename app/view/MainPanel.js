
Ext.define('oasis.view.MainPanel', {
   extend: 'Ext.panel.Panel',
    alias: 'widget.mainpanel',
    requires: [
      'oasis.view.TopTabs',
      'oasis.view.BottomGrid'
    ],

    initComponent:function(){
        this.layout = 'border';
        this.title = 'My test panel';
        this.items = [{
            xtype: 'toptabs',
            region: 'north'
        },{
            xtype:'bottomgrid',
            region: 'center'
        }];
        return this.callParent(arguments);
    }
});