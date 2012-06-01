
Ext.define('oasis.view.MainPanel', {
   extend: 'Ext.panel.Panel',
    alias: 'widget.mainpanel',

    initComponent:function(){
        this.layout = 'fit';
        this.title = 'My test panel';
        this.html = 'This is my test panel showing up!!';


        return this.callParent(arguments);
    }
});